<template>
  <div class="courses-bg">
    <!-- Sección principal -->
    <section class="courses-section">
      <h1 class="section-title">Capacitación en RPA para Empresas</h1>
      <p class="courses-desc">
        Ofrecemos programas de formación en RPA diseñados para equipos empresariales. Aprende a crear, gestionar y mantener robots de software que optimizan los procesos de tu organización.
      </p>
      <div class="cursos-empresas">
        <div class="curso-card">
          <h2>Curso: Introducción a RPA para Empresas</h2>
          <ul>
            <li>¿Qué es RPA y cómo puede transformar tu empresa?</li>
            <li>Identificación de procesos automatizables</li>
            <li>Primeros pasos para crear tu propio robot</li>
          </ul>
          <a href="#" class="curso-btn">Solicitar información</a>
        </div>
        <div class="curso-card">
          <h2>Curso: Desarrollo de Robots Empresariales</h2>
          <ul>
            <li>Diseño y construcción de robots con herramientas líderes</li>
            <li>Integración con sistemas internos</li>
            <li>Buenas prácticas y seguridad en RPA</li>
          </ul>
          <a href="#" class="curso-btn">Solicitar información</a>
        </div>
        <div class="curso-card">
          <h2>Curso: Automatización Avanzada y Escalabilidad</h2>
          <ul>
            <li>Automatización de procesos complejos</li>
            <li>Gestión y monitoreo de robots en producción</li>
            <li>Capacitación para equipos internos de RPA</li>
          </ul>
          <a href="#" class="curso-btn">Solicitar información</a>
        </div>
      </div>
    </section>
    <!-- Sección de profesores expertos -->
    <section class="profesores-section">
      <h2 class="profesores-title">Nuestros profesores son expertos de la industria</h2>
      <div class="profesores-cards">
        <div class="profesor-card">
          <img src="/src/assets/profesor1.png" alt="Danilo Toro" class="profesor-img" />
          <div class="profesor-info">
            <div class="profesor-nombre">Danilo Toro</div>
            <div class="profesor-cargo">Especialista en RPA</div>
            <div class="profesor-curso"><span class="profesor-icon">🤖</span> Automatización Robótica</div>
          </div>
        </div>
        <div class="profesor-card">
          <img src="/src/assets/profesor2.png" alt="Ivan Lazo" class="profesor-img" />
          <div class="profesor-info">
            <div class="profesor-nombre">Ivan Lazo</div>
            <div class="profesor-cargo">Consultor de Procesos</div>
            <div class="profesor-curso"><span class="profesor-icon">📊</span> Optimización de Procesos</div>
          </div>
        </div>
        <div class="profesor-card">
          <img src="/src/assets/profesor3.png" alt="Andres Gomez" class="profesor-img" />
          <div class="profesor-info">
            <div class="profesor-nombre">Andres Gomez</div>
            <div class="profesor-cargo">Instructor Senior</div>
            <div class="profesor-curso"><span class="profesor-icon">💡</span> Innovación en RPA</div>
          </div>
        </div>
      </div>
    </section>
    <!-- Sección de beneficios -->
    <section class="beneficios-section">
      <h2 class="beneficios-title">¿Por qué capacitar a tu equipo en RPA?</h2>
      <ul class="beneficios-lista">
        <li>Independencia tecnológica: tu empresa crea y mantiene sus propios robots.</li>
        <li>Reducción de costos y tiempos en procesos clave.</li>
        <li>Mayor seguridad y control sobre la automatización.</li>
        <li>Adaptación rápida a los cambios del negocio.</li>
      </ul>
    </section>
    <!-- Sección de llamado a la acción -->
    <section class="cta-section">
      <h2 class="cta-title">¿Listo para transformar tu empresa con RPA?</h2>
      <a href="/contacto" class="cta-btn">Solicita una consultoría gratuita</a>
    </section>
  </div>
  <!-- Sección: Capacitación empresarial que sí acelera equipos (copiada de HomeView.vue) -->
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
</template>

<script>
export default {
  name: 'CoursesView'
}
</script>

<style scoped>
.courses-bg {
  min-height: 100vh;
  padding-bottom: 4rem;
  background: transparent;
}
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem 0 1.5rem 0;
  font-weight: bold;
  letter-spacing: 1px;
}
.courses-desc {
  color: #e0cfff;
  text-align: center;
  font-size: 1.18rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.cursos-empresas {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}
.curso-card {
  background: rgba(124, 58, 237, 0.13);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(124,58,237,0.10);
  padding: 2.2rem 1.7rem;
  min-width: 260px;
  max-width: 340px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 370px;
  justify-content: flex-start;
  position: relative;
}
.curso-card h2 {
  color: #fff;
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.curso-card ul {
  color: #e0cfff;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
  padding-left: 1.2rem;
}
.curso-btn {
  color: #fff;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  padding: 0.7rem 1.7rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  font-size: 1rem;
  margin-top: auto;
  align-self: center;
}
.curso-btn:hover {
  background: #7c3aed;
  color: #fff;
}
.beneficios-section {
  text-align: center;
  margin: 64px 0 48px 0;
  padding: 40px 0 40px 0;
}
.beneficios-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
}
.beneficios-lista {
  color: #e0cfff;
  font-size: 1.15rem;
  list-style: disc inside;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
.cta-section {
  text-align: center;
  margin: 64px 0 0 0;
  padding: 40px 0 40px 0;
}
.cta-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
}
.cta-btn {
  color: #fff;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  padding: 1rem 2.5rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(124,58,237,0.10);
  transition: background 0.2s, color 0.2s;
  border: none;
}
.cta-btn:hover {
  background: #7c3aed;
  color: #fff;
}
@media (max-width: 900px) {
  .cursos-empresas {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .curso-card {
    width: 95vw;
    max-width: 340px;
    height: auto;
  }
}
.capacitacion-section {
  margin: 64px auto 0 auto;
  padding: 56px 36px 56px 36px;
  max-width: 900px;
  background: rgba(255,255,255,0.10);
  border-radius: 24px;
  border: 1.5px solid rgba(255,255,255,0.25);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.capacitacion-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5rem;
  flex-wrap: wrap;
}
.capacitacion-left {
  flex: 1 1 320px;
  min-width: 280px;
}
.capacitacion-title {
  font-size: 2.3rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1.2rem;
}
.capacitacion-subtitle {
  color: #e0cfff;
  font-size: 1.15rem;
  margin-bottom: 2.2rem;
}
.capacitacion-btn {
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  color: #fff;
  font-weight: 700;
  padding: 0.9rem 2.2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  border: none;
  transition: background 0.2s, color 0.2s;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
.capacitacion-btn:hover {
  background: #7c3aed;
  color: #fff;
}
.capacitacion-right {
  flex: 1 1 340px;
  min-width: 300px;
  display: flex;
  justify-content: center;
}
.capacitacion-form {
  background: rgba(24, 16, 40, 0.85);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(124,58,237,0.10);
  padding: 2.2rem 1.7rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 280px;
  max-width: 350px;
  width: 100%;
}
.form-title {
  color: #fff;
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  text-align: center;
}
.form-input, .form-select {
  background: #23113a;
  color: #fff;
  border: 1px solid #7c3aed;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.form-input::placeholder {
  color: #b3a6d6;
  opacity: 1;
}
.form-row {
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1rem;
}
.form-submit {
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background 0.2s;
}
.form-submit:hover {
  background: #7c3aed;
  color: #fff;
}
.form-legal {
  color: #e0cfff;
  font-size: 0.95rem;
  margin-top: 0.5rem;
  text-align: center;
}
.capacitacion-beneficios {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2.5rem;
}
.beneficio-item {
  background: rgba(124, 58, 237, 0.13);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(124,58,237,0.10);
  padding: 1.2rem 2.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.08rem;
  font-weight: 500;
}
.beneficio-icon {
  font-size: 1.5rem;
  color: #b97aff;
}
@media (max-width: 900px) {
  .capacitacion-content {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .capacitacion-section {
    padding: 32px 10px 24px 10px;
  }
}
.profesores-section {
  margin: 64px auto 48px auto;
  max-width: 1200px;
  padding: 48px 0 48px 0;
}
.profesores-title {
  font-size: 2.1rem;
  color: #fff;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
}
.profesores-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.profesor-card {
  background: rgba(24, 16, 40, 0.95);
  border-radius: 20px;
  box-shadow: 0 4px 24px 0 rgba(124,58,237,0.10);
  padding: 0 0 1.5rem 0;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
}
.profesor-card:hover {
  box-shadow: 0 8px 32px 0 rgba(124,58,237,0.18);
  transform: translateY(-4px) scale(1.03);
}
.profesor-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  margin-bottom: 1.2rem;
}
.profesor-info {
  width: 100%;
  padding: 0 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.profesor-nombre {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.3rem;
}
.profesor-cargo {
  color: #e0cfff;
  font-size: 1rem;
  margin-bottom: 1.1rem;
}
.profesor-curso {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(124, 58, 237, 0.13);
  color: #b3ffb3;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
}
.profesor-icon {
  font-size: 1.3rem;
}
@media (max-width: 1100px) {
  .profesores-cards {
    justify-content: center;
  }
}
@media (max-width: 700px) {
  .profesores-cards {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .profesor-card {
    width: 95vw;
    max-width: 340px;
  }
  .profesores-title {
    text-align: center;
  }
}
</style> 