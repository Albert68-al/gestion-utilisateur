const pool = require('../config/db');

// GET Tous les utilisateurs
exports.getUsers = async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
};

// POST Créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    const result = await pool.query(
        'INSERT INTO users(name,email) VALUES($1,$2) RETURNING *',
        [name, email]
    );
    res.status(201).json(result.rows[0]);
};

// PUT Modifier un utilisateur
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    await pool.query(
        'UPDATE users SET name=$1, email=$2 WHERE id=$3',
        [name, email, id]
    );
    res.json({ message: 'Utilisateur modifié' });
};

// DELETE Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id=$1', [id]);
    res.json({ message: 'Utilisateur supprimé' });
};
