const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const coursesRouter = require('./routes/courses');
const contactRouter = require('./routes/contact');

app.use('/api/courses', coursesRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
}); 