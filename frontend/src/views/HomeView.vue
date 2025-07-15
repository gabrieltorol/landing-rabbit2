<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
import { sendContactMessage } from '@/services/ApiService.js'
import logo from '@/assets/logo-rabbit2.png'

const nombre = ref('')
const email = ref('')
const asunto = ref('')
const mensaje = ref('')
const enviado = ref(false)
const error = ref('')

const telefono = ref('')
const empresa = ref('')
const cargo = ref('')
const tamanoEmpresa = ref('')
const sitioWeb = ref('')
const infoAdicional = ref('')

const enviarFormulario = async () => {
  error.value = ''
  enviado.value = false
  try {
    // Concatenar todos los datos en el campo mensaje
    const mensajeCompleto =
      `Teléfono: ${telefono.value}\n` +
      `Empresa: ${empresa.value}\n` +
      `Cargo: ${cargo.value}\n` +
      `Tamaño de empresa: ${tamanoEmpresa.value}\n` +
      `Sitio web: ${sitioWeb.value}\n` +
      `Información adicional: ${infoAdicional.value}`
    await sendContactMessage({
      nombre: nombre.value,
      email: email.value,
      mensaje: mensajeCompleto
    })
    enviado.value = true
    nombre.value = ''
    email.value = ''
    telefono.value = ''
    empresa.value = ''
    cargo.value = ''
    tamanoEmpresa.value = ''
    sitioWeb.value = ''
    infoAdicional.value = ''
    asunto.value = ''
    mensaje.value = ''
  } catch (e) {
    error.value = 'Hubo un error al enviar el mensaje. Intenta nuevamente.'
  }
}

// Carrusel de logos (sin require)
const logos = [
  { src: '/src/assets/ls-logo.png', alt: 'Logo LS' },
  { src: '/src/assets/robotipy-logo.png', alt: 'Logo Robotipy' },
  { src: '/src/assets/rocketbot-logo.png', alt: 'Logo Rocketbot' },
  { src: '/src/assets/rizobacter-logo.png', alt: 'Logo Rizobacter' },
  { src: '/src/assets/opendevpro-logo.png', alt: 'Logo OpenDev Pro' }
]
</script>

<template>
  <div class="home bg-degradado">
    <!-- Hero -->
    <section class="hero-section">
      <h1 class="hero-title">
        Transforma tu empresa con automatización robótica
      </h1>
      <p class="hero-subtitle">
        Optimiza tus procesos con nuestras soluciones de <b>RPA, inteligencia artificial y desarrollo de software</b>.
      </p>
      <div class="hero-actions">
        <router-link to="/contacto" class="hero-btn">Contáctanos</router-link>
        <router-link to="/cursos" class="hero-btn hero-btn-outline">Agenda una llamada</router-link>
      </div>
    </section>

    <!-- Confían en nosotros -->
    <section class="confian-section">
      <h2 class="section-title">Confían en nosotros</h2>
      <div class="confian-carousel">
        <div class="confian-track">
          <div class="confian-logo" v-for="(logo, i) in logos.concat(logos)" :key="i">
            <img :src="logo.src" :alt="logo.alt" class="confian-img-logo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Tarjetas informativas RPA -->
    <section class="info-cards-section">
      <div class="info-cards-container">
        <div class="info-card">
          <div class="info-card-number">01</div>
          <div class="info-card-title">¿Qué es RPA?</div>
          <div class="info-card-desc">Es un software que simula acciones humanas permitiendo automatizar procesos repetitivos.</div>
        </div>
        <div class="info-card">
          <div class="info-card-number">02</div>
          <div class="info-card-title">¿Qué beneficios tiene?</div>
          <div class="info-card-desc">Mejora la productividad, continuidad operativa y experiencia de clientes con impacto en el crecimiento de tu empresa.</div>
        </div>
        <div class="info-card">
          <div class="info-card-number">03</div>
          <div class="info-card-title">¿Dónde se puede aplicar?</div>
          <div class="info-card-desc">Puede ser aplicado por todo usuario o empresa que requiera automatizar tareas digitales.</div>
        </div>
      </div>
    </section>

    <!-- Segunda sección: Automatiza tu empresa con RPA factory! -->
    <section class="rpa-factory-section glass-effect">
      <h2 class="section-title">Automatiza tu empresa con <span class="highlight">Rabbit2!</span></h2>
      <p class="section-desc">
        Contamos con diferentes soluciones para tu empresa, mediante software de RPA (Robotic process automation), el cual permite la automatización de tareas y procesos.
      </p>
      <ul class="benefits-list">
        <li class="benefit-item">
          <span class="benefit-icon">✔️</span>
          <span>Aumenta la productividad.</span>
        </li>
        <li class="benefit-item">
          <span class="benefit-icon">✔️</span>
          <span>Asegura continuidad operativa.</span>
        </li>
        <li class="benefit-item">
          <span class="benefit-icon">✔️</span>
          <span>Mejora el flujo y la seguridad de los datos.</span>
        </li>
      </ul>
      <p class="section-desc">
        Disponemos de un equipo de trabajo especializado en dar soluciones a las necesidades de los clientes y sus procesos, agregando valor a su negocio.
      </p>
      <router-link to="/contacto" class="cta-btn">¡Únete a la automatización!</router-link>
    </section>

    <!-- Contáctanos -->
    <section class="contacto-section">
      <h2 class="section-title">¿Listo para automatizar tu empresa?</h2>
      <p class="contacto-desc">Solicita una consultoría gratuita o agenda una capacitación para tu equipo. ¡Te ayudamos a dar el siguiente paso en la transformación digital!</p>
      <router-link to="/contacto" class="contacto-btn">Contáctanos</router-link>
    </section>

    <!-- Nueva sección: Libera todo tu potencial -->
    <section class="potencial-section">
      <h2 class="potencial-title">Libera todo tu potencial.</h2>
      <p class="potencial-desc">
        Capacitamos equipos completos en <b>RPA</b> para que puedan crear, mantener y escalar sus propios robots dentro de la empresa. Lleva a tu equipo al siguiente nivel y conviértete en protagonista de la automatización.
      </p>
      <router-link to="/cursos" class="potencial-btn">Quiero capacitar a mi equipo</router-link>
    </section>

    <!-- Sección: Capacitación empresarial (inspirada en la imagen) -->
    <section class="capacitacion-section">
      <div class="capacitacion-content">
        <div class="capacitacion-left">
          <h2 class="capacitacion-title">Capacitación empresarial que <br />Sí acelera equipos</h2>
          <p class="capacitacion-subtitle">Rabbit2 Business no es solo para perfiles técnicos. Capacita líderes, administradores, talento operativo y más.</p>
          <button class="capacitacion-btn">Conocer planes</button>
        </div>
        <div class="capacitacion-right">
          <form class="capacitacion-form">
            <h3 class="form-title">Agenda una demo</h3>
            <input type="text" placeholder="Nombre de tu empresa" class="form-input" />
            <input type="text" placeholder="Tu nombre" class="form-input" />
            <input type="email" placeholder="Correo empresarial" class="form-input" />
            <input type="text" placeholder="Total empleados en tu empresa" class="form-input" />
            <div class="form-row">
              <select class="form-input form-select" style="max-width: 80px;">
                <option value="+56">🇨🇱 +56</option>
                <option value="+54">🇦🇷 +54</option>
                <option value="+57">🇨🇴 +57</option>
                <option value="+34">🇪🇸 +34</option>
                <!-- Agrega más países si lo deseas -->
              </select>
              <input type="text" placeholder="Nro. de teléfono" class="form-input" />
            </div>
            <button type="submit" class="form-submit">Enviar</button>
            <p class="form-legal">Al enviar el formulario, aceptas los <a href="#">Términos de servicio</a> y <a href="#">Políticas de privacidad</a> de Rabbit2.</p>
          </form>
        </div>
      </div>
      <div class="capacitacion-beneficios">
        <div class="beneficio-item">
          <span class="beneficio-icon">🔗</span>
          <span>Modelo flexible de licenciamiento</span>
        </div>
        <div class="beneficio-item">
          <span class="beneficio-icon">📚</span>
          <span>Formación a la medida</span>
        </div>
        <div class="beneficio-item">
          <span class="beneficio-icon">⏱️</span>
          <span>Seguimiento en tiempo real</span>
        </div>
        <div class="beneficio-item">
          <span class="beneficio-icon">🤝</span>
          <span>Acompañamiento humano</span>
        </div>
      </div>
    </section>

    <!-- Sección de contacto real -->
    <!-- (Eliminada por solicitud del usuario) -->
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
/* Espaciado global entre secciones */
section {
  margin-bottom: 56px;
}

.hero-section {
  text-align: center;
  padding: 10rem 2rem 4rem 2rem;
  margin-bottom: 56px;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 2rem;
}

.hero-btn {
  background: #591d5f;
  color: #fff;
  font-weight: bold;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  border: 2px solid #3c1d5f;
  transition: background 0.2s, color 0.2s;
}

.hero-btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid #7c3aed;
}

.hero-btn:hover,
.hero-btn-outline:hover {
  background: #7c3aed;
  color: #fff;
}

.confian-section {
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
  margin-bottom: 12px;
}

.confian-carousel {
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  margin: 32px auto 48px auto;
  position: relative;
  background: transparent;
}

.confian-track {
  display: flex;
  align-items: center;
  gap: 48px;
  animation: scroll-logos 18s linear infinite;
  width: max-content;
}

.confian-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  min-height: 80px;
  background: #111;
  border: 2px solid #591d5f;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(60,29,95,0.10);
  padding: 12px 24px;
}

.confian-img-logo {
  height: 60px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  filter: grayscale(0.2) brightness(0.95);
}

@keyframes scroll-logos {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.info-cards-section {
  padding: 3.5rem 0 2.5rem 0;
  margin-top: 0;
  margin-bottom: 48px;
  background: transparent;
}
.info-cards-container {
  gap: 3rem;
}
.info-card {
  padding: 3rem 2.2rem 2.2rem 2.2rem;
  margin-bottom: 0;
  color: #fff;
}

.rpa-factory-section {
  margin: 56px auto 0 auto;
  padding: 48px 36px 36px 36px;
  max-width: 750px;
}

.contacto-section {
  padding: 5.5rem 2rem 4.5rem 2rem;
  margin-top: 64px;
  margin-bottom: 48px;
  text-align: center;
}

.contact-section {
  max-width: 1200px;
  margin: 64px auto 64px auto;
  padding: 40px 20px;
}
.contact-cards {
  gap: 40px;
  margin-bottom: 40px;
}
.contact-bottom {
  gap: 40px;
  margin-top: 32px;
}
.contact-form {
  padding: 32px 36px;
  gap: 20px;
}
.form-row {
  gap: 20px;
}

.home {
  width: 100%;
  min-height: 100vh;
  color: #fff;
  padding-left: 0;
  padding-right: 0;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
}
.confian-logo {
  background: #111;
  border: 2px solid #591d5f;
  color: #e0cfff;
  border-radius: 12px;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 8px 0 rgba(60,29,95,0.10);
  margin-bottom: 1rem;
}
.confian-img-logo {
  max-width: 140px;
  max-height: 48px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  filter: grayscale(0.2) brightness(0.95);
}

.servicios-section {
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
  border-bottom: 2px solid #591d5f;
}
.servicios-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.servicio-card {
  background: #181028;
  border: 2px solid #3c1d5f;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  width: 320px;
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(60,29,95,0.10);
  transition: border 0.2s, box-shadow 0.2s;
}
.servicio-card:hover {
  border: 2px solid #591d5f;
  box-shadow: 0 4px 16px 0 rgba(60,29,95,0.18);
}
.servicio-card h3 {
  color: #e0cfff;
  margin-bottom: 1rem;
}

.contacto-section {
  padding: 3rem 2rem 4rem 2rem;
  text-align: center;
}
.contacto-desc {
  color: #e0cfff;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
.contacto-btn {
  display: inline-block;
  background: #3c1d5f;
  color: #fff;
  font-weight: bold;
  padding: 0.9rem 2.2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  border: 2px solid #591d5f;
  transition: background 0.2s, color 0.2s;
}
.contacto-btn:hover {
  background: #591d5f;
  color: #e0cfff;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.10);
  border-radius: 20px;
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 2.5rem 2rem;
  margin: 2.5rem auto 3rem auto;
  width: 90%;
  max-width: 900px;
}

.servicios-desc {
  color: #e0cfff;
  font-size: 1.15rem;
  margin-bottom: 1.2rem;
  text-align: center;
}
.servicios-lista {
  list-style: disc inside;
  color: #fff;
  font-size: 1.13rem;
  margin: 0 auto 1.2rem auto;
  max-width: 600px;
  padding-left: 0;
  text-align: left;
}
.servicios-lista li {
  margin-bottom: 0.5rem;
}
.servicios-cta {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #fff;
}

.rpa-factory-section {
  margin: 48px auto 0 auto;
  padding: 40px 32px 32px 32px;
  max-width: 700px;
  background: rgba(255,255,255,0.10);
  border-radius: 24px;
  border: 1.5px solid rgba(255,255,255,0.25);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
}
.section-title .highlight {
  color: #b97aff;
  font-weight: 700;
}
.section-desc {
  color: #e0e0e0;
  font-size: 1.15rem;
  margin-bottom: 18px;
  text-align: center;
}
.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px 0;
  width: 100%;
}
.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(60,29,95,0.18);
  border-radius: 12px;
  padding: 12px 20px;
  margin-bottom: 10px;
  font-size: 1.08rem;
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(60,29,95,0.08);
  transition: background 0.2s;
}
.benefit-item:hover {
  background: rgba(89,29,95,0.25);
}
.benefit-icon {
  font-size: 1.5rem;
  color: #b97aff;
}
.cta-btn {
  margin-top: 18px;
  padding: 12px 32px;
  background: linear-gradient(90deg, #591d5f 0%, #3c1d5f 100%);
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  border: none;
  border-radius: 24px;
  box-shadow: 0 4px 16px 0 rgba(60,29,95,0.18);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  letter-spacing: 0.5px;
  display: inline-block;
}
.cta-btn:hover {
  background: linear-gradient(90deg, #b97aff 0%, #591d5f 100%);
  color: #fff;
  transform: translateY(-2px) scale(1.03);
}

.info-cards-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 2rem 0;
  background: transparent;
}
.info-cards-container {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
}
.info-card {
  background: rgba(255, 255, 255, 0.10);
  border-radius: 20px;
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 2.5rem 2rem 2rem 2rem;
  width: 370px;
  min-height: 230px;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s, border 0.2s;
}
.info-card:hover {
  box-shadow: 0 8px 32px 0 rgba(60,29,95,0.16);
  transform: translateY(-4px) scale(1.03);
}
.info-card-number {
  font-size: 2rem;
  font-weight: 700;
  color: #e6007a;
  margin-bottom: 1.2rem;
}
.info-card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}
.info-card-desc {
  font-size: 1.08rem;
  color: #888;
  font-weight: 400;
  line-height: 1.5;
}

.contact-section {
  max-width: 1000px;
  margin: 64px auto 0 auto;
  padding: 32px 24px;
  background: #1a1027;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.07);
  border: 2px solid #7c3aed;
}
.contact-form-wide {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 18px;
}
.form-group-wide {
  grid-column: span 2;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.contact-form-wide input,
.contact-form-wide select,
.contact-form-wide textarea {
  background: #23113a;
  color: #fff;
  border: 1px solid #7c3aed;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 1rem;
  margin-bottom: 0;
}
.contact-form-wide input::placeholder,
.contact-form-wide textarea::placeholder {
  color: #b3a6d6;
  opacity: 1;
}
.contact-form-wide label {
  font-weight: bold;
  color: #fff;
  margin-bottom: 2px;
}
.contact-btn-wide {
  grid-column: 1 / -1;
  width: 100%;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 0;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;
  transition: background 0.2s;
}
.contact-btn-wide:hover {
  background: linear-gradient(90deg, #a21caf 0%, #7c3aed 100%);
}
.form-group textarea {
  min-height: 80px;
  resize: vertical;
}
@media (max-width: 1200px) {
  .contact-section {
    max-width: 98vw;
    padding: 18px 4px;
  }
  .contact-form-wide {
    grid-template-columns: repeat(2, 1fr);
  }
  .form-group-wide {
    grid-column: span 2;
  }
}
@media (max-width: 700px) {
  .contact-form-wide {
    grid-template-columns: 1fr;
  }
  .form-group-wide {
    grid-column: span 1;
  }
}
.bg-degradado {
  background: radial-gradient(
    ellipse at top,
    rgba(124, 58, 237, 0.55) 0%,     /* #7c3aed con opacidad */
    rgba(162, 28, 175, 0.35) 30%,    /* #a21caf con opacidad */
    rgba(24, 16, 40, 0.25) 60%,      /* #181028 con opacidad */
    #111 90%,
    #111 100%
  );
}
.potencial-section {
  max-width: 900px;
  margin: 56px auto 0 auto;
  padding: 48px 24px 40px 24px;
  background: rgba(255,255,255,0.07);
  border-radius: 20px;
  box-shadow: 0 4px 32px rgba(60,29,95,0.10);
  text-align: center;
}
.potencial-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 18px;
}
.potencial-desc {
  font-size: 1.25rem;
  color: #e0e0e0;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
.potencial-btn {
  display: inline-block;
  margin-top: 2.2rem;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  color: #fff;
  font-weight: bold;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  border: none;
  box-shadow: 0 2px 8px 0 rgba(60,29,95,0.10);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.potencial-btn:hover {
  background: linear-gradient(90deg, #a21caf 0%, #7c3aed 100%);
  color: #fff;
}

/* Nueva sección de capacitación */
.capacitacion-section {
  max-width: 1200px;
  margin: 56px auto 0 auto;
  padding: 48px 24px;
  background: #1a1027;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.07);
  border: 2px solid #7c3aed;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.capacitacion-content {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
  width: 100%;
}
.capacitacion-left {
  flex: 1;
  text-align: left;
}
.capacitacion-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  line-height: 1.2;
}
.capacitacion-subtitle {
  font-size: 1.25rem;
  color: #e0e0e0;
  margin-bottom: 25px;
  line-height: 1.6;
}
.capacitacion-btn {
  display: inline-block;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  color: #fff;
  font-weight: bold;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  border: none;
  box-shadow: 0 2px 8px 0 rgba(60,29,95,0.10);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.capacitacion-btn:hover {
  background: linear-gradient(90deg, #a21caf 0%, #7c3aed 100%);
  color: #fff;
}
.capacitacion-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.capacitacion-form {
  background: #23113a;
  border-radius: 16px;
  padding: 32px 36px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.07);
  border: 1.5px solid rgba(255,255,255,0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
}
.form-input {
  background: #23113a;
  color: #fff;
  border: 1px solid #7c3aed;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 1rem;
  margin-bottom: 15px;
  width: 100%;
}
.form-input::placeholder {
  color: #b3a6d6;
  opacity: 1;
}
.form-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #7c3aed;
  border-radius: 6px;
  background: #23113a;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 15px;
}
.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}
.form-submit {
  width: 100%;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.2s;
}
.form-submit:hover {
  background: linear-gradient(90deg, #a21caf 0%, #7c3aed 100%);
}
.form-legal {
  font-size: 0.9rem;
  color: #b3a6d6;
  text-align: center;
  margin-top: 20px;
}
.form-legal a {
  color: #7c3aed;
  text-decoration: none;
}
.form-legal a:hover {
  text-decoration: underline;
}
.capacitacion-beneficios {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  margin-top: 30px;
  flex-wrap: wrap;
  width: 100%;
}
.beneficio-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(60,29,95,0.18);
  border-radius: 16px;
  padding: 18px 32px;
  font-size: 1.08rem;
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(60,29,95,0.08);
  transition: background 0.2s;
  min-width: 270px;
  min-height: 56px;
  justify-content: flex-start;
}
.beneficio-icon {
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 900px) {
  .capacitacion-beneficios {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  .beneficio-item {
    min-width: 220px;
    width: 100%;
    justify-content: center;
  }
}
</style>
