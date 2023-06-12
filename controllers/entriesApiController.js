const entry = require('../models/entries'); // Importar el modelo de la BBDD

const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

const updateEntry = async (req, res) => {
    const dataEntry = req.body; // {title,new_title,content,email,category}
    const response = await entry.updateEntry(dataEntry);
    res.status(200).json({
        "items_updated": response,
        data: dataEntry
    });
}

const deleteEntry = async (req, res) => {
    const dataEntry = req.body;
    const response = await entry.deleteEntry(dataEntry);
    res.status(200).json({
        message: `Se ha borrado la entry '${dataEntry.title}'`
    });
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
}