const db = require('../config/database');

async function getAllCourses(req, res) {
  db.query('SELECT * FROM cursos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los cursos' });
    }
    res.json(results);
  });
}

module.exports = { getAllCourses }; 