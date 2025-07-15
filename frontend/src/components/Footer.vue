<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <p>&copy; 2024 RPA Academy. Todos los derechos reservados.</p>
        <div class="footer-links">
          <router-link to="/contacto" class="footer-link">Contacto</router-link>
          <a href="#" class="footer-link">Política de Privacidad</a>
          <a href="#" class="footer-link">Términos de Servicio</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(90deg, #3c1d5f 0%, #591d5f 100%);
  color: #fff;
  padding: 2rem 0 1rem 0;
  margin-top: auto;
  box-shadow: 0 -2px 8px 0 rgba(0,0,0,0.10);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: #e0cfff;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1rem;
}

.footer-link:hover {
  color: #fff;
}

@media (max-width: 700px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .footer-links {
    gap: 1rem;
  }
}
</style> 