Fase 0: Configuración del Entorno y la Base de Datos
El objetivo es tener un proyecto frontend y backend funcionales que se ejecuten, y una base de datos lista para recibir datos.

Tarea: Inicializar el proyecto backend.

Acción: Dentro de la carpeta proyecto-rpa/, crea la carpeta backend/. Navega a ella y ejecuta npm init -y para crear un archivo package.json.

Tarea: Instalar dependencias del backend.

Acción: En la carpeta backend/, ejecuta npm install express cors dotenv mysql2.

Tarea: Crear el servidor Express básico.

Acción: En backend/, crea el archivo server.js. Escribe el código mínimo para iniciar un servidor Express que escuche en el puerto 3000 y muestre un mensaje en la consola.

Tarea: Crear la base de datos.

Acción: Usando tu cliente de MySQL, ejecuta el comando CREATE DATABASE rpa_website_db;.

Tarea: Crear la tabla cursos.

Acción: Conéctate a rpa_website_db y ejecuta el script SQL para crear la tabla cursos con las columnas: id (INT, PK, AI), titulo (VARCHAR), descripcion (TEXT), temario (TEXT).

Tarea: Crear la tabla contactos.

Acción: Ejecuta el script SQL para crear la tabla contactos con las columnas: id (INT, PK, AI), nombre (VARCHAR), email (VARCHAR), mensaje (TEXT), fecha_creacion (TIMESTAMP).

Tarea: Configurar la conexión a la base de datos.

Acción: En backend/, crea la carpeta config/. Dentro, crea el archivo database.js que exporta un objeto de conexión mysql2 con los datos de tu base de datos (host, user, password, database).

Tarea: Inicializar el proyecto frontend.

Acción: Fuera de la carpeta backend/, en la raíz proyecto-rpa/, ejecuta npm create vue@latest frontend. Sigue los prompts, asegurándote de incluir Vue Router y Pinia.

Tarea: Instalar dependencias del frontend.

Acción: Navega a la nueva carpeta frontend/ y ejecuta npm install axios.

Fase 1: Construcción de la API del Backend
El objetivo es tener endpoints funcionales que el frontend pueda consumir más tarde. Probaremos cada endpoint con una herramienta como Postman o Insomnia.

Tarea: Poblar datos de prueba para cursos.

Acción: Inserta manualmente 2 o 3 filas de ejemplo en tu tabla cursos en MySQL.

Tarea: Crear el controlador de cursos.

Acción: En backend/, crea la carpeta controllers/. Dentro, crea courseController.js con una función asíncrona getAllCourses que consulta y devuelve todas las filas de la tabla cursos.

Tarea: Crear la ruta de cursos.

Acción: En backend/, crea la carpeta routes/. Dentro, crea courses.js. Define una ruta GET / que utilice la función getAllCourses del controlador.

Tarea: Integrar la ruta de cursos en el servidor.

Acción: En server.js, importa el enrutador de routes/courses.js y dile a Express que lo use para cualquier petición a /api/courses.

Tarea: Verificar el endpoint de cursos.

Acción: Inicia el servidor backend (node server.js). Usa Postman para hacer una petición GET a http://localhost:3000/api/courses. Verifica que recibes un JSON con los cursos de prueba.

Tarea: Crear el controlador de contacto.

Acción: En controllers/, crea contactController.js con una función asíncrona createContactMessage que reciba nombre, email y mensaje del cuerpo de la petición e inserte una nueva fila en la tabla contactos.

Tarea: Crear la ruta de contacto.

Acción: En routes/, crea contact.js. Define una ruta POST / que utilice la función createContactMessage del controlador.

Tarea: Integrar la ruta de contacto en el servidor.

Acción: En server.js, importa y usa el enrutador de routes/contact.js para las peticiones a /api/contact.

Tarea: Verificar el endpoint de contacto.

Acción: Reinicia el servidor. Usa Postman para hacer una petición POST a http://localhost:3000/api/contact con un JSON de prueba. Verifica que la respuesta es exitosa y que la nueva fila aparece en la tabla contactos de MySQL.

Fase 2: Construcción del Frontend y Conexión con la API
El objetivo es construir la interfaz de usuario página por página, conectándola a la API ya funcional.

Tarea: Configurar el enrutador de Vue.

Acción: En frontend/src/router/index.js, define las 5 rutas principales (/, /que-es-rpa, /cursos, /recursos, /contacto) y asigna a cada una un componente de vista (ej: HomeView, CoursesView, etc.).

Tarea: Crear los archivos de las vistas.

Acción: En frontend/src/views/, crea los 5 archivos .vue correspondientes a las rutas. Cada archivo debe tener una plantilla mínima, como <h1>Página de Cursos</h1>.

Tarea: Crear el layout principal.

Acción: Modifica frontend/src/App.vue para que incluya un componente Navbar (aún no creado), el <router-view /> y un componente Footer (aún no creado).

Tarea: Crear el componente Navbar.

Acción: En frontend/src/components/, crea Navbar.vue. Añade una lista de router-link que apunten a cada una de las rutas definidas.

Tarea: Crear el componente Footer.

Acción: En frontend/src/components/, crea Footer.vue con información básica de copyright o enlaces.

Tarea: Verificar la navegación.

Acción: Inicia el servidor de desarrollo de Vue (npm run dev). Abre el navegador. Deberías ver el Navbar y el Footer, y poder navegar entre las 5 páginas vacías.

Tarea: Crear el servicio de API.

Acción: En frontend/src/, crea la carpeta services/. Dentro, crea ApiService.js. Configura una instancia de Axios con la URL base de tu backend (http://localhost:3000/api).

Tarea: Implementar la función getCourses en el servicio.

Acción: En ApiService.js, exporta una función getCourses que haga una petición GET a /courses usando la instancia de Axios.

Tarea: Implementar la función sendContactMessage en el servicio.

Acción: En ApiService.js, exporta una función sendContactMessage(data) que haga una petición POST a /contact con los datos del formulario.

Tarea: Construir la vista de Cursos (CoursesView.vue).

Acción: En CoursesView.vue, importa getCourses. Usa onMounted para llamar a la función, guarda los resultados en una variable de estado (usando ref), y renderiza la lista de cursos en la plantilla usando v-for.

Tarea: Verificar la página de Cursos.

Acción: Con ambos servidores (frontend y backend) corriendo, navega a la página de cursos. Deberías ver la lista de cursos cargada desde tu API.

Tarea: Construir el formulario de Contacto (ContactView.vue).

Acción: En ContactView.vue, crea un formulario HTML. Usa v-model para vincular los campos a variables de estado locales.

Tarea: Implementar la lógica de envío del formulario.

Acción: En ContactView.vue, crea un método que se active al enviar el formulario. Este método debe llamar a sendContactMessage desde tu servicio de API, pasándole los datos del formulario.

Tarea: Verificar el formulario de contacto.

Acción: Rellena y envía el formulario en la página de contacto. Verifica que aparece el mensaje de éxito en la UI y que los datos se guardan en la base de datos.

Tarea: Poblar las páginas estáticas.

Acción: Añade el contenido de texto e imágenes correspondientes a HomeView.vue, AboutRPAView.vue y ResourcesView.vue.