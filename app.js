const express = require('express');

const app = express();

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

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé'
    });
    next();
});

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'ouefvefb',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: '',
            price: 4900,                                        // les prix sont en centimes
            userId: 'ojfsvnvre',
        },
        {
            _id: 'ethrthbrt',
            title: 'Mon second objet',
            description: 'Les infos de mon second objet',
            imageUrl: '',
            price: 2900,
            userId: 'ojfsvnvtrbgbre',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;