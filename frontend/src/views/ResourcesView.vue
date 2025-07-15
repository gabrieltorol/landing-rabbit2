<template>
  <div class="resources-bg">
    <!-- Historias de clientes -->
    <section class="clientes-section">
      <h1 class="clientes-title">Historias de clientes</h1>
      <p class="clientes-desc">Explora algunos de los casos de éxito de nuestros clientes y obtén ideas para iniciar o escalar tu transformación empresarial.</p>
      <div class="clientes-destacados">
        <div class="cliente-card destacado" v-for="(destacado, i) in destacados" :key="i">
          <div class="cliente-img" :style="`background-image: url('${destacado.img}')`"></div>
          <div class="cliente-info">
            <h3>{{ destacado.titulo }}</h3>
            <p>{{ destacado.descripcion }}</p>
            <span class="cliente-link">Ver historia</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Ebooks de automatización -->
    <section class="ebooks-section">
      <h2 class="ebooks-title">Ebooks de automatización</h2>
      <p class="ebooks-desc">Descarga nuestros ebooks gratuitos y aprende más sobre RPA, automatización inteligente y transformación digital para tu empresa.</p>
      <div class="ebooks-list">
        <div class="ebook-card">
          <h3>Guía esencial de RPA</h3>
          <p>Todo lo que necesitas saber para comenzar a automatizar procesos en tu organización.</p>
          <a href="#" class="ebook-link">Descargar ebook</a>
        </div>
        <div class="ebook-card">
          <h3>Automatización inteligente en 2024</h3>
          <p>Tendencias, casos de uso y mejores prácticas para empresas modernas.</p>
          <a href="#" class="ebook-link">Descargar ebook</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResourcesView',
  data() {
    return {
      destacados: [
        {
          titulo: 'MFA responde rápido a los cambios del mercado',
          descripcion: 'Automatización de procesos críticos para adaptarse a la demanda y mejorar la eficiencia operativa.',
          img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
        },
        {
          titulo: 'Universidad Nova impulsa la educación digital',
          descripcion: 'Implementación de RPA para agilizar la gestión académica y administrativa.',
          img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
        },
        {
          titulo: 'Quioport implementa Smart Airport',
          descripcion: 'Transformación digital en la gestión aeroportuaria con soluciones inteligentes.',
          img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>
.resources-bg {
  width: 100%;
  display: block;
}
.clientes-section {
  /* background: linear-gradient(180deg, #181028 60%, #232046 100%); */
  background: transparent;
  padding: 4.5rem 0 3.5rem 0;
  text-align: center;
  margin-bottom: 3.5rem;
}
.clientes-title {
  color: #fff;
  font-size: 2.7rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: 0.5px;
}
.clientes-desc {
  color: #e0cfff;
  font-size: 1.25rem;
  margin-bottom: 2.7rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.clientes-destacados {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 0;
  flex-wrap: wrap;
}
.cliente-card.destacado {
  background: rgba(124, 58, 237, 0.13);
  border-radius: 22px;
  box-shadow: 0 4px 24px 0 rgba(124,58,237,0.10);
  overflow: hidden;
  width: 340px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1.5px solid rgba(124, 58, 237, 0.18);
  margin-bottom: 0;
}
.cliente-img {
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 22px 22px 0 0;
}
.cliente-info {
  padding: 1.5rem 1.2rem 1.5rem 1.2rem;
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cliente-info h3 {
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
  color: #fff;
  text-align: left;
}
.cliente-info p {
  color: #e0cfff;
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
  text-align: left;
}
.cliente-link {
  color: #a21caf;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-top: auto;
  text-align: left;
}
.ebooks-section {
  /* background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%); */
  background: transparent;
  padding: 4.5rem 0 3.5rem 0;
  text-align: center;
  border-radius: 22px;
  max-width: 900px;
  margin: 0 auto 3.5rem auto;
  box-shadow: 0 4px 24px 0 rgba(124,58,237,0.10);
  width: 100%;
  display: block;
}
.ebooks-title {
  color: #fff;
  font-size: 2.3rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: 0.5px;
}
.ebooks-desc {
  color: #e0cfff;
  font-size: 1.18rem;
  margin-bottom: 2.7rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.ebooks-list {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}
.ebook-card {
  background: #fff;
  color: #7c3aed;
  border-radius: 16px;
  padding: 2.2rem 1.7rem;
  min-width: 260px;
  max-width: 320px;
  box-shadow: 0 2px 8px 0 rgba(124,58,237,0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0;
}
.ebook-card h3 {
  color: #7c3aed;
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
  text-align: left;
}
.ebook-card p {
  color: #a21caf;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
  text-align: left;
}
.ebook-link {
  color: #fff;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  padding: 0.7rem 1.7rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.ebook-link:hover {
  background: #7c3aed;
  color: #fff;
}
@media (max-width: 900px) {
  .clientes-destacados {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .ebooks-list {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .ebooks-section {
    max-width: 98vw;
    border-radius: 18px;
  }
}
</style> 