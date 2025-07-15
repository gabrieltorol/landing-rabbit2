<template>
  <div class="contact-bg">
    <section class="contact-section">
      <h1 class="contact-title">Construyamos el futuro de tu empresa</h1>
      <p class="contact-subtitle">
        Cuéntanos tus retos de automatización. Nuestro equipo analizará tus necesidades y te propondrá una solución personalizada.
      </p>
      <div class="contact-card">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="nombre">Nombre completo *</label>
              <input type="text" id="nombre" v-model="formData.nombre" required class="form-input" placeholder="John Doe">
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" v-model="formData.email" required class="form-input" placeholder="john@company.com">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="telefono">Teléfono *</label>
              <input type="tel" id="telefono" v-model="formData.telefono" required class="form-input" placeholder="+1 (555) 123-4567">
            </div>
            <div class="form-group">
              <label for="empresa">Empresa *</label>
              <input type="text" id="empresa" v-model="formData.empresa" required class="form-input" placeholder="Your Company Inc.">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="cargo">Cargo</label>
              <input type="text" id="cargo" v-model="formData.cargo" class="form-input" placeholder="CEO, CTO, Manager, etc.">
            </div>
            <div class="form-group">
              <label for="tamano">Tamaño de empresa</label>
              <select id="tamano" v-model="formData.tamano" class="form-input">
                <option value="">Selecciona tamaño</option>
                <option value="1-10">1-10 empleados</option>
                <option value="11-50">11-50 empleados</option>
                <option value="51-200">51-200 empleados</option>
                <option value="200+">Más de 200 empleados</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="web">Sitio web de la empresa</label>
            <input type="url" id="web" v-model="formData.web" class="form-input" placeholder="https://yourcompany.com">
          </div>
          <div class="form-group">
            <label for="mensaje">Información adicional</label>
            <textarea id="mensaje" v-model="formData.mensaje" rows="4" class="form-textarea" placeholder="Cuéntanos más sobre tu empresa y necesidades de automatización..."></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? 'Enviando...' : 'Enviar información' }}
          </button>
        </form>
        <div v-if="message" class="message" :class="messageType">
          {{ message }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { sendContactMessage } from '@/services/ApiService'

export default {
  name: 'ContactView',
  setup() {
    const formData = ref({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      cargo: '',
      tamano: '',
      web: '',
      mensaje: ''
    })
    const loading = ref(false)
    const message = ref('')
    const messageType = ref('')
    const handleSubmit = async () => {
      loading.value = true
      message.value = ''
      try {
        // Solo enviamos los campos requeridos al backend
        await sendContactMessage({
          nombre: formData.value.nombre,
          email: formData.value.email,
          mensaje: `Teléfono: ${formData.value.telefono}\nEmpresa: ${formData.value.empresa}\nCargo: ${formData.value.cargo}\nTamaño: ${formData.value.tamano}\nWeb: ${formData.value.web}\nMensaje: ${formData.value.mensaje}`
        })
        message.value = '¡Información enviada con éxito!'
        messageType.value = 'success'
        formData.value = { nombre: '', email: '', telefono: '', empresa: '', cargo: '', tamano: '', web: '', mensaje: '' }
      } catch (error) {
        message.value = 'Error al enviar la información. Inténtalo de nuevo.'
        messageType.value = 'error'
        console.error('Error sending message:', error)
      } finally {
        loading.value = false
      }
    }
    return { formData, loading, message, messageType, handleSubmit }
  }
}
</script>

<style scoped>
.contact-bg {
  min-height: 100vh;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem 3rem 2rem;
  text-align: center;
}
.contact-title {
  font-size: 2.3rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.contact-subtitle {
  color: #e0cfff;
  margin-bottom: 2.2rem;
  font-size: 1.1rem;
}
.contact-card {
  background: #181028;
  border: 2px solid #591d5f;
  border-radius: 18px;
  padding: 2.5rem 2rem;
  color: #e0cfff;
  box-shadow: 0 2px 16px 0 rgba(60,29,95,0.10);
  font-size: 1.08rem;
  margin: 0 auto;
  max-width: 500px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.form-row {
  display: flex;
  gap: 1.2rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  text-align: left;
}
.form-group label {
  font-weight: bold;
  color: #fff;
  font-size: 1rem;
}
.form-input, .form-textarea, select.form-input {
  padding: 0.75rem;
  border: 1.5px solid #3c1d5f;
  border-radius: 4px;
  font-size: 1rem;
  background: #222;
  color: #fff;
}
.form-input:focus, .form-textarea:focus, select.form-input:focus {
  outline: none;
  border-color: #591d5f;
  box-shadow: 0 0 0 2px rgba(89,29,95,0.15);
}
.submit-btn {
  background: #591d5f;
  color: white;
  border: 2px solid #3c1d5f;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
  transition: background-color 0.3s, color 0.2s;
  width: 100%;
}
.submit-btn:hover:not(:disabled) {
  background: #3c1d5f;
  color: #e0cfff;
}
.submit-btn:disabled {
  background: #ccc;
  color: #888;
  cursor: not-allowed;
}
.message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}
.message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
.message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
@media (max-width: 700px) {
  .form-row {
    flex-direction: column;
    gap: 0.5rem;
  }
  .contact-card {
    padding: 1.5rem 0.5rem;
  }
}
</style> 