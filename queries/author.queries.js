const db_queries_authors = {
    getAllAuthors: `SELECT a.name,a.surname,a.image,a.email
    FROM authors AS a
    ORDER BY a.name;`,
    getAuthorsByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,
    createAuthor: `INSERT INTO authors(name,surname,email,image) 
    VALUES ($1,$2,$3,$4)`,
    updateAuthor: `UPDATE authors
	SET name=$1, surname=$2, email=$3, image=$4
    WHERE name=$5`,
    deleteAuthor: `DELETE FROM authors WHERE name=$1`
}

module.exports = db_queries_authors;