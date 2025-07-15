<script setup>
import { ref } from 'vue'

const industrias = [
  {
    nombre: 'Salud',
    titulo: 'Concéntrese en la atención al paciente, no en el papeleo.',
    subtitulo: 'Reimaginar las experiencias de proveedores y pacientes.',
    beneficios: [
      {
        titulo: 'Impulse mejores resultados para los pacientes',
        texto: 'Aumente el acceso de los pacientes a una atención de calidad y ayude a los pacientes a mantenerse encaminados hacia los resultados, apoyando la gestión de la salud de la población a escala. Además, implemente recordatorios automáticos para citas y tratamientos, y facilite la comunicación entre pacientes y profesionales de la salud para un seguimiento más efectivo.'
      },
      {
        titulo: 'Mejore el compromiso de los empleados',
        texto: 'Recupere el tiempo de su equipo para centrarse en trabajos de alto valor, como pasar tiempo con pacientes, abordar problemas complejos o investigar casos. Reclute y retenga talento de manera más efectiva. Automatice tareas administrativas repetitivas, reduzca el estrés laboral y fomente un ambiente de trabajo más productivo y satisfactorio.'
      },
      {
        titulo: 'Acelere la transformación digital',
        texto: 'Automatice los procesos mundanos, incluidos los relacionados con la gestión del ciclo de ingresos, los recursos humanos, la cadena de suministro y F&A, para que su organización pueda responder rápidamente a los cambios del mercado, los cambios de políticas y las actualizaciones normativas. Implemente soluciones digitales que permitan una adaptación ágil y eficiente a los nuevos retos del sector salud.'
      }
    ]
  },
  {
    nombre: 'Seguros',
    titulo: 'Optimice la gestión de pólizas y siniestros.',
    subtitulo: 'Transforme la experiencia de clientes y agentes.',
    beneficios: [
      {
        titulo: 'Procesos más ágiles',
        texto: 'Automatice la emisión de pólizas, la gestión de reclamaciones y la verificación de datos para reducir tiempos y errores. Además, integre sistemas para que la información fluya sin fricciones y mejore la eficiencia operativa en toda la compañía.'
      },
      {
        titulo: 'Mejor experiencia del cliente',
        texto: 'Ofrezca respuestas rápidas y personalizadas, mejorando la satisfacción y fidelización. Utilice chatbots y asistentes virtuales para resolver dudas y acompañar al cliente en cada etapa del proceso, generando confianza y lealtad.'
      },
      {
        titulo: 'Cumplimiento normativo',
        texto: 'Asegure la trazabilidad y el cumplimiento de regulaciones mediante flujos automatizados y reportes precisos. Mantenga registros actualizados y facilite auditorías internas y externas, minimizando riesgos regulatorios.'
      }
    ]
  },
  {
    nombre: 'Banca',
    titulo: 'Automatización segura y eficiente en banca.',
    subtitulo: 'Modernice la operación y mejore la experiencia del usuario.',
    beneficios: [
      {
        titulo: 'Onboarding digital',
        texto: 'Agilice la apertura de cuentas y la validación de identidad con robots que verifican documentos y datos en segundos. Reduzca el tiempo de espera para nuevos clientes y mejore la seguridad en los procesos de incorporación.'
      },
      {
        titulo: 'Prevención de fraudes',
        texto: 'Implemente controles automáticos y alertas inteligentes para detectar operaciones sospechosas en tiempo real. Analice patrones de comportamiento y actúe de manera proactiva para proteger los activos de la entidad y de los clientes.'
      },
      {
        titulo: 'Gestión documental',
        texto: 'Reduzca el uso de papel y digitalice procesos internos, facilitando auditorías y consultas. Automatice la organización, almacenamiento y recuperación de documentos para una gestión más eficiente y segura.'
      }
    ]
  },
  {
    nombre: 'Servicios Públicos',
    titulo: 'Eficiencia y transparencia en servicios públicos.',
    subtitulo: 'Mejore la atención ciudadana y la gestión interna.',
    beneficios: [
      {
        titulo: 'Atención 24/7',
        texto: 'Implemente bots para responder consultas y procesar solicitudes en cualquier momento. Garantice una atención continua y eficiente, mejorando la satisfacción de los ciudadanos y optimizando los recursos del organismo.'
      },
      {
        titulo: 'Procesos internos optimizados',
        texto: 'Automatice trámites, pagos y expedientes para reducir tiempos y costos. Centralice la información y facilite el seguimiento de cada gestión, asegurando transparencia y eficiencia en la administración pública.'
      },
      {
        titulo: 'Transparencia y control',
        texto: 'Genere reportes automáticos y asegure la trazabilidad de cada gestión. Permita auditorías rápidas y precisas, y cumpla con los estándares de transparencia exigidos por la normativa vigente.'
      }
    ]
  },
  {
    nombre: 'Telco',
    titulo: 'Agilice la gestión de clientes y servicios.',
    subtitulo: 'Reduzca tiempos de respuesta y mejore la retención.',
    beneficios: [
      {
        titulo: 'Soporte automatizado',
        texto: 'Resuelva incidencias y consultas frecuentes con asistentes virtuales. Ofrezca soporte técnico inmediato y personalizado, mejorando la experiencia del usuario y reduciendo la carga del equipo humano.'
      },
      {
        titulo: 'Facturación eficiente',
        texto: 'Automatice la emisión y envío de facturas, así como la gestión de cobros. Reduzca errores y agilice los procesos de facturación, permitiendo un control financiero más preciso y transparente.'
      },
      {
        titulo: 'Análisis de datos',
        texto: 'Obtenga insights en tiempo real sobre el uso de servicios y preferencias de los clientes. Utilice estos datos para anticipar necesidades, personalizar ofertas y mejorar la toma de decisiones estratégicas.'
      }
    ]
  },
  {
    nombre: 'Manufactura',
    titulo: 'Optimice la producción y la cadena de suministro.',
    subtitulo: 'Automatización para mayor calidad y eficiencia.',
    beneficios: [
      {
        titulo: 'Control de inventarios',
        texto: 'Automatice el registro y monitoreo de insumos y productos terminados. Mantenga niveles óptimos de stock, evite quiebres y reduzca pérdidas por caducidad o deterioro.'
      },
      {
        titulo: 'Mantenimiento predictivo',
        texto: 'Programe alertas y acciones automáticas para evitar paradas inesperadas. Anticipe fallas en los equipos y prolongue la vida útil de la maquinaria, reduciendo costos de reparación y tiempos de inactividad.'
      },
      {
        titulo: 'Integración de sistemas',
        texto: 'Conecte ERP, CRM y otros sistemas para un flujo de información sin errores. Mejore la coordinación entre áreas, agilice la toma de decisiones y aumente la eficiencia operativa en toda la planta.'
      }
    ]
  }
]

const industriaSeleccionada = ref(0)
</script>

<template>
  <div class="soluciones-bg">
    <h1 class="soluciones-title">¿Cómo usar RPA + IA en tu industria?</h1>
    <div class="soluciones-tabs">
      <div
        v-for="(industria, idx) in industrias"
        :key="industria.nombre"
        :class="['tab-item', { active: industriaSeleccionada === idx }]"
        @click="industriaSeleccionada = idx"
      >
        {{ industria.nombre }}
      </div>
    </div>
    <div class="soluciones-content">
      <h2 class="soluciones-content-title">{{ industrias[industriaSeleccionada].titulo }}</h2>
      <p class="soluciones-content-subtitle">{{ industrias[industriaSeleccionada].subtitulo }}</p>
      <div class="soluciones-beneficios">
        <div v-for="(beneficio, i) in industrias[industriaSeleccionada].beneficios" :key="i" class="beneficio-col">
          <h3 class="beneficio-title">{{ beneficio.titulo }}</h3>
          <p class="beneficio-text">{{ beneficio.texto }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Call to Action eliminado por solicitud del usuario -->
</template>

<style scoped>
.soluciones-bg {
  min-height: 100vh;
  background: #181028;
  padding: 0 0 4rem 0;
}
.soluciones-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 2.5rem 0;
  letter-spacing: 1px;
  color: #fff;
  padding-top: 2.5rem;
}
.soluciones-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  padding: 1.2rem 0 0.7rem 0;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  border-radius: 0 0 18px 18px;
}
.tab-item {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  padding: 0.3rem 1.2rem 0.3rem 1.2rem;
  border: none;
  background: transparent;
  border-bottom: 3px solid transparent;
  transition: color 0.2s, border-bottom 0.2s, background 0.2s;
  letter-spacing: 0.5px;
  border-radius: 8px 8px 0 0;
}
.tab-item.active {
  color: #7c3aed;
  border-bottom: 3px solid #fff;
  background: #fff;
}
.soluciones-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
}
.soluciones-content-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.7rem;
}
.soluciones-content-subtitle {
  color: #e0e0e0;
  font-size: 1.1rem;
  margin-bottom: 2.2rem;
}
.soluciones-beneficios {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}
.beneficio-col {
  flex: 1 1 300px;
  max-width: 420px;
  min-width: 260px;
  background: rgba(124, 58, 237, 0.13);
  border-radius: 14px;
  padding: 1.2rem 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px 0 rgba(124,58,237,0.10);
  border: 1.5px solid rgba(124, 58, 237, 0.18);
  text-align: center;
}
.beneficio-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
.beneficio-text {
  color: #e0cfff;
  font-size: 1rem;
}
@media (max-width: 900px) {
  .soluciones-beneficios {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .beneficio-col {
    max-width: 100%;
    min-width: 0;
  }
}
.soluciones-cta {
  margin: 4rem auto 0 auto;
  padding: 3rem 2rem 3.5rem 2rem;
  background: linear-gradient(90deg, #7c3aed 0%, #a21caf 100%);
  border-radius: 22px;
  text-align: center;
  max-width: 700px;
  box-shadow: 0 4px 24px 0 rgba(124,58,237,0.10);
}
.cta-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.cta-subtitle {
  color: #e0cfff;
  font-size: 1.15rem;
  margin-bottom: 2.2rem;
}
.cta-btn-soluciones {
  display: inline-block;
  background: #fff;
  color: #7c3aed;
  font-weight: 700;
  font-size: 1.15rem;
  padding: 1rem 2.5rem;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(124,58,237,0.10);
  transition: background 0.2s, color 0.2s;
  border: none;
}
.cta-btn-soluciones:hover {
  background: #e0cfff;
  color: #a21caf;
}
</style> 