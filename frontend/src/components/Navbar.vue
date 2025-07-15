<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/">
        <img :src="logo" alt="Logo" class="navbar-logo" />
      </router-link>
    </div>
    <div class="navbar-right">
      <router-link to="/soluciones" class="navbar-link">Soluciones</router-link>
      <router-link to="/recursos" class="navbar-link">Recursos</router-link>
      <router-link to="/capacitacion" class="navbar-link">Capacitación</router-link>
      <router-link to="/contacto" class="navbar-link">Contacto</router-link>
    </div>
  </nav>
</template>

<script setup>
import logo from '@/assets/logo-rabbit2.png'
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111;
  padding: 0.7rem 2rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: 36px;
  margin-right: 1.5rem;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;
}

.navbar-link:hover {
  color: #7c3aed;
}

@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
    padding: 0.7rem 1rem;
  }
  .navbar-right {
    flex-wrap: wrap;
    gap: 0.7rem;
    justify-content: center;
  }
}
</style> 