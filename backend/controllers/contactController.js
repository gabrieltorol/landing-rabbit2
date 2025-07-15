const db = require('../config/database');

async function createContactMessage(req, res) {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const query = 'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)';
  
  db.query(query, [nombre, email, mensaje], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al guardar el mensaje' });
    }
    res.status(201).json({ 
      message: 'Mensaje enviado con éxito',
      id: results.insertId 
    });
  });
}

module.exports = { createContactMessage }; 