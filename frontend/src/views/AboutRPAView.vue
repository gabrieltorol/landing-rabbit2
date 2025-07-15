<template>
  <div class="about-bg">
    <section class="about-section">
      <h1 class="about-title">¿Qué es RPA?</h1>
      <div class="about-card">
        <p>
          <strong>RPA</strong> (Robotic Process Automation) es la tecnología que permite a las empresas automatizar tareas repetitivas y procesos de negocio usando robots de software. Estos bots trabajan sobre tus sistemas actuales, ahorrando tiempo, reduciendo errores y permitiendo que tu equipo se enfoque en tareas de mayor valor.
        </p>
        <ul>
          <li>Automatizamos procesos para que tu empresa sea más eficiente y competitiva</li>
          <li>Te ayudamos a identificar oportunidades de automatización y a implementarlas</li>
          <li>Capacitamos a tu equipo para que pueda crear y mantener sus propios robots</li>
        </ul>
        <p>
          Somos especialistas en transformar empresas a través de la automatización inteligente y la formación en RPA.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutRPAView'
}
</script>

<style scoped>
.about-bg {
  min-height: 100vh;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-section {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem 3rem 2rem;
  text-align: center;
}
.about-title {
  font-size: 2.3rem;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: bold;
}
.about-card {
  background: #181028;
  border: 2px solid #591d5f;
  border-radius: 18px;
  padding: 2.5rem 2rem;
  color: #e0cfff;
  box-shadow: 0 2px 16px 0 rgba(60,29,95,0.10);
  font-size: 1.15rem;
  text-align: left;
  margin: 0 auto;
}
.about-card ul {
  margin: 1.5rem 0 1.5rem 1.5rem;
  padding: 0;
  color: #fff;
}
.about-card li {
  margin-bottom: 0.7rem;
  font-size: 1.08rem;
}
.about-card strong {
  color: #fff;
}
</style> 