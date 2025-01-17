# **Stéganographie d'image avec message caché**

## **Description du projet**
Cette application est une Progressive Web App (PWA) qui permet de dissimuler un message texte dans une image, ainsi que de l'extraire ultérieurement. Le processus repose sur la modification des bits les moins significatifs (LSB) des pixels de l'image pour intégrer les données sans affecter visuellement l'image.

Elle inclut une authentification sécurisée basée sur OAuth2 pour garantir que seuls les utilisateurs autorisés peuvent accéder à ses fonctionnalités.
![Dashboard Screenshot](/images/1.png)

---

## **Fonctionnalités principales**
1. **Encodage d'un message dans une image :**
   - L'utilisateur doit sélectionner une image et écrire le texte qu'il veut dissimiler .
     
      ![Dashboard Screenshot](/images/2.png)
     
   - S'il clique sur le bouton Encoder, une fenêtre pop-up lui demande d'écrire un clé secret.
     
     ![Dashboard Screenshot](/images/3.png)
   - S'il clique sur le bouton ok , la dissimilation est faite avec succès et l'image contenant le message est automatiquement téléchargée après l'encodage.
     
   ![Dashboard Screenshot](/images/4.png)
   
3. **Décodage d'un message :**
   - Quant l'utilisateur clique sur le bouton Décoder , il peut charger l'image qu 'il veut depuis son appareil.
     
     ![Dashboard Screenshot](/images/5.png)
     
   - Une clé de décryptage est requise pour extraire le message caché dans cette image.
     
     ![Dashboard Screenshot](/images/6.png)
     
   - Si le clé secret de l'image choisie est le meme utilisé dans la phase d'encodage, le message dissimulé est affiché. Sinon, il te dit clé incorrecte.
     
     ![Dashboard Screenshot](/images/7.png)

4. **Authentification avec OAuth2 :**
   - Les utilisateurs doivent se connecter via OAuth2 pour accéder à l'application.
   - L'accès est sécurisé et permet de gérer des sessions personnalisées.

5. **Support PWA :**
   - L'application peut être installée sur votre appareil comme une application native.
   - Fonctionne hors ligne après le premier chargement.

---

## **Technologies utilisées**
- **HTML5** : Pour la structure de l'application.
- **CSS3** : Pour le style et le design réactif.
- **JavaScript (ES6)** : Pour la logique principale.
- **Canvas API** : Pour manipuler les pixels de l'image.
- **CryptoJS** : Pour le chiffrement et le déchiffrement des messages.
- **OAuth2** : Pour l'authentification sécurisée des utilisateurs.
- **Service Workers** : Pour la gestion hors ligne et l'installation en tant que PWA.
- **Manifest JSON** : Pour configurer l'application PWA.

---

## **Comment utiliser ce projet**
1. **Encodage :**
   - Connectez-vous via OAuth2 pour accéder à l'application.
   - Chargez une image à partir de votre appareil.
   - Entrez le message que vous souhaitez dissimuler.
   - Fournissez une clé secrète pour le chiffrement.
   - L'image encodée sera automatiquement téléchargée.

2. **Décodage :**
   - Cliquez sur le bouton "Décoder" et sélectionnez une image.
   - Entrez la clé secrète pour extraire le message dissimulé.
   - Le message sera affiché si la clé est correcte.

3. **Installation en tant que PWA :**
   - Accédez à l'application dans votre navigateur.
   - Cliquez sur "Ajouter à l'écran d'accueil" pour l'installer comme application native.

---

## **🔒 Certification SSL**
Cette application est une Progressive Web App (PWA) qui permet de dissimuler un message texte dans une image, ainsi que de l'extraire ultérieurement. Le processus repose sur la modification des bits les moins significatifs (LSB) des pixels de l'image pour intégrer les données sans affecter visuellement l'image.

Elle inclut une authentification sécurisée basée sur OAuth2 pour garantir que seuls les utilisateurs autorisés peuvent accéder à ses fonctionnalités.
![Dashboard Screenshot](/images/TLS.png)

---

