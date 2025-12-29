# Gestion des utilisateurs – API Node.js / Express / PostgreSQL

## Description
Ceci est une **API REST** pour la gestion des utilisateurs, développée avec Node.js, Express et PostgreSQL.  
Elle permet de **créer, lire, mettre à jour et supprimer des utilisateurs**.  
Ce projet est destiné à **backend Node.js** .

---

## Fonctionnalités
- Récupérer tous les utilisateurs (`GET /api/users`)
- Récupérer un utilisateur par ID (`GET /api/users/:id`)
- Ajouter un utilisateur (`POST /api/users`)
- Mettre à jour un utilisateur (`PUT /api/users/:id`)
- Supprimer un utilisateur (`DELETE /api/users/:id`)
- Validation simple des données  
- Test des endpoints avec Postman

---

## Technologies utilisées
- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- body-parser
- cors
- dotenv (pour variables d’environnement)

---

## Installation

1. **Cloner le dépôt**
git clone https://github.com/Albert68-al/gestion-utilisateur.git
cd gestion-utilisateur

2. **Installer les dépendances dans votre machine**
--npm install
--npm init -y
--npm install express pg dotenv cors

3.**Créer la base de données PostgreSQL**
CREATE DATABASE gestion_utilisateur;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

4.**Créer le fichier .env à la racine du projet**
DB_USER=ton_utilisateur
DB_PASSWORD=ton_motdepasse
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gestion_utilisateur


5.**Lancer le serveur**
node app.js
                                     **Structure du projet**
                                       gestion-utilisateur/
                                              ├── controllers/
                                              │   └── userController.js
                                              ├── routes/
                                              │   └── userRoutes.js
                                              ├── config/
                                              │   └── db.js
                                              ├── app.js
                                              ├── package.json
                                              └── .env


Test sur postman
git clone https://github.com/Albert68-al/gestion-utilisateur.git
cd gestion-utilisateur
