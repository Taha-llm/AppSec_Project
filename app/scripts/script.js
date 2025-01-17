// Références aux éléments de l'interface
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageInput = document.getElementById("imageInput");
const messageInput = document.getElementById("message");
const output = document.getElementById("output");

// Charger l'image dans le canvas
imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            output.innerText = "Image chargée avec succès !";
        };
        img.src = reader.result;
    };

    reader.readAsDataURL(file);
});

// Fonction pour encoder un message dans l'image
function encodeMessage() {
    const message = messageInput.value;

    if (!message) {
        output.innerText = "Veuillez entrer un message à encoder.";
        return;
    }

    const secretKey = prompt("Entrez la clé secrète pour chiffrer votre message :");
    if (!secretKey) {
        alert("Vous devez entrer une clé secrète !");
        return;
    }

    try {
        const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imgData.data;

        const messageBinary = encryptedMessage
            .split("")
            .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
            .join("");

        const messageLength = messageBinary.length;

        if (messageLength > pixels.length / 4) {
            output.innerText = "Le message est trop long pour être encodé dans cette image.";
            return;
        }

        // Stocker la longueur du message dans les premiers 32 bits
        for (let i = 0; i < 32; i++) {
            pixels[i] = (pixels[i] & 254) | ((messageLength >> i) & 1);
        }

        // Encoder le message dans l'image
        for (let i = 0; i < messageLength; i++) {
            const pixelIndex = 32 + i;
            pixels[pixelIndex] = (pixels[pixelIndex] & 254) | parseInt(messageBinary[i], 10);
        }

        ctx.putImageData(imgData, 0, 0);

        // Télécharger automatiquement l'image encodée
        const downloadLink = document.createElement("a");
        downloadLink.download = "image_encodee.png";
        downloadLink.href = canvas.toDataURL();
        downloadLink.click();

        output.innerText = "Message encodé et image téléchargée avec succès !";
    } catch (error) {
        console.error("Erreur lors du chiffrement :", error);
        alert("Une erreur est survenue lors du chiffrement du message.");
    }
}

// Fonction pour déclencher le décodage
function triggerDecode() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function () {
            const img = new Image();
            img.onload = function () {
                // Dessiner l'image dans le canvas pour analyse
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const secretKey = prompt("Entrez la clé secrète pour décrypter le message :");
                if (!secretKey) {
                    alert("Vous devez entrer une clé secrète !");
                    return;
                }

                decodeMessage(secretKey);
            };
            img.src = reader.result;
        };

        reader.readAsDataURL(file);
    };

    // Ouvrir la boîte de dialogue pour sélectionner une image
    input.click();
}

// Fonction pour décoder un message depuis l'image
function decodeMessage(secretKey) {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;

    let messageLength = 0;
    for (let i = 0; i < 32; i++) {
        messageLength |= (pixels[i] & 1) << i;
    }

    if (messageLength === 0 || messageLength > pixels.length / 4) {
        output.innerText = "L'image ne contient aucun message encodé.";
        return;
    }

    let messageBinary = "";
    for (let i = 0; i < messageLength; i++) {
        const pixelIndex = 32 + i;
        messageBinary += pixels[pixelIndex] & 1;
    }

    let encryptedMessage = "";
    for (let i = 0; i < messageBinary.length; i += 8) {
        const byte = messageBinary.slice(i, i + 8);
        encryptedMessage += String.fromCharCode(parseInt(byte, 2));
    }

    try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
        const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (decryptedMessage) {
            output.innerText = `Message extrait : "${decryptedMessage}"`;
        } else {
            alert("Clé incorrecte ou message corrompu.");
        }
    } catch (error) {
        console.error("Erreur lors du déchiffrement :", error);
        alert("Impossible de décrypter le message. Vérifiez la clé secrète.");
    }
}
