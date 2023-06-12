const author = require('../models/authors');

const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorsByEmail(req.query.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); // [] con las entries encontradas
}

const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,email,image}
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({
        message: `Se ha creado el author '${newAuthor.email}'`
    });
}

const updateAuthor = async (req, res) => {
    const dataAuthor = req.body; // {name,new_name,surname,email,image}
    const response = await author.updateAuthor(dataAuthor);
    res.status(200).json({
        message: `Usuario actualizado: '${dataAuthor.email}'`
    });
}

const deleteAuthor = async (req, res) => {
    const dataAuthor = req.body;
    const response = await author.deleteAuthor(dataAuthor);
    res.status(200).json({
        message: `Se ha borrado el author '${dataAuthor.email}'`
    });
}

module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}