const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

const app = express();
mongoose.connect('mongodb+srv://william:bonjour@cluster0.1gzdstd.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    // L'origine qui a le droit d'accéder à l'API c'est tout le monde (*)
    res.setHeader('Access-Control-Allow-Origin', '*');
    // On donne l'autorisation d'utiliser certains en-têtes (headers) sur l'objet requête
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // ainsi que certaines méthodes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);

module.exports = app;