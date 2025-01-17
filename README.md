# **Stéganographie d'image avec message caché**

## **Description du projet**
Cette application est une Progressive Web App (PWA) qui permet de dissimuler un message texte dans une image, ainsi que de l'extraire ultérieurement. Le processus repose sur la modification des bits les moins significatifs (LSB) des pixels de l'image pour intégrer les données sans affecter visuellement l'image.

Elle inclut une authentification sécurisée basée sur OAuth2 pour garantir que seuls les utilisateurs autorisés peuvent accéder à ses fonctionnalités.
![Dashboard Screenshot](/images/1.png)

---

## **Fonctionnalités principales**
1. **Encodage d'un message dans une image :**
   - L'utilisateur peut sélectionner une image.
   - Un message texte est intégré dans l'image à l'aide de stéganographie.
   - L'image contenant le message est automatiquement téléchargée après l'encodage.
![Dashboard Screenshot](/images/2.png)
![Dashboard Screenshot](/images/3.png)
![Dashboard Screenshot](/images/4.png)
2. **Décodage d'un message :**
   - L'utilisateur peut charger une image depuis son appareil.
   - Une clé de décryptage est requise pour extraire le message caché.
   - Le message dissimulé est affiché si la clé est correcte.

3. **Authentification avec OAuth2 :**
   - Les utilisateurs doivent se connecter via OAuth2 pour accéder à l'application.
   - L'accès est sécurisé et permet de gérer des sessions personnalisées.

4. **Support PWA :**
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

