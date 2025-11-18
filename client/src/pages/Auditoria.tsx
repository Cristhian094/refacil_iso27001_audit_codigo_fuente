import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import { CheckCircle, AlertCircle, Users, BookOpen, Mail } from "lucide-react";
import { INCIDENT_EMAIL } from "@/const";

export default function Auditoria() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Generalidades para la Auditoría Interna</h1>
          <p className="text-lg text-green-100">
            Información esencial para prepararse para la auditoría ISO 27001
          </p>
        </div>
      </section>

      {/* Enfoque de la Auditoría */}
      <Section title="Enfoque de la Auditoría" className="bg-gray-50">
        <ContentCard
          title="Alcance y Objetivos"
          icon={<BookOpen className="w-6 h-6 text-green-600" />}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Enfoque Principal</h4>
              <p className="text-gray-700">
                La auditoría se centrará en el <strong>SGSI de TI</strong>, específicamente en el desarrollo seguro y la gestión de la infraestructura en la nube.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Áreas Evaluadas</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Implementación de Security by Design en proyectos</li>
                <li>✓ Gestión de accesos y control de identidades</li>
                <li>✓ Protección de datos en tránsito y en reposo (cifrado)</li>
                <li>✓ Gestión de activos de información</li>
                <li>✓ Respuesta a incidentes de seguridad</li>
                <li>✓ Continuidad de negocio y recuperación ante desastres</li>
                <li>✓ Cumplimiento de políticas de seguridad</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </Section>

      {/* Preparación Recomendada */}
      <Section title="Preparación Recomendada">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard
            title="Conocimiento Teórico"
            icon={<BookOpen className="w-6 h-6 text-green-600" />}
          >
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>✓ Principios C-I-D:</strong> Confidencialidad, Integridad, Disponibilidad</li>
              <li><strong>✓ Políticas de Seguridad:</strong> PO-GI-10, PO-GI-08, PO-GI-06</li>
              <li><strong>✓ Roles y Responsabilidades:</strong> Tu rol específico en el SGSI</li>
              <li><strong>✓ Riesgos Identificados:</strong> Riesgos críticos para Fintech</li>
              <li><strong>✓ Controles Implementados:</strong> Medidas de seguridad en tu área</li>
            </ul>
          </ContentCard>

          <ContentCard
            title="Preparación Práctica"
            icon={<CheckCircle className="w-6 h-6 text-green-600" />}
          >
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>✓ Revisar Documentación:</strong> Políticas, procedimientos, estándares</li>
              <li><strong>✓ Entender Controles:</strong> Cómo se implementan en tu área</li>
              <li><strong>✓ Casos de Uso:</strong> Ejemplos de cómo aplicas seguridad en tu trabajo</li>
              <li><strong>✓ Incidentes:</strong> Cómo reportar y responder a incidentes</li>
              <li><strong>✓ Preguntas Frecuentes:</strong> Prepararse para posibles preguntas del auditor</li>
            </ul>
          </ContentCard>
        </div>
      </Section>

      {/* Reporte de Incidentes */}
      <Section title="Reporte de Incidentes" className="bg-red-50">
        <ContentCard
          title="⚠️ Información Crítica"
          variant="warning"
          icon={<AlertCircle className="w-6 h-6 text-red-600" />}
        >
          <div className="space-y-4">
            <p className="text-gray-700 font-semibold">
              Ante cualquier incidente o sospecha de incidente de seguridad de la información, se debe reportar inmediatamente al correo:
            </p>

            <a
              href={`mailto:${INCIDENT_EMAIL}`}
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <Mail className="inline mr-2" size={18} />
              {INCIDENT_EMAIL}
            </a>

            <div className="mt-4 p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-2">¿Qué reportar?</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Acceso no autorizado a sistemas o datos</li>
                <li>• Intentos de phishing o smishing</li>
                <li>• Pérdida o robo de dispositivos</li>
                <li>• Cambios no autorizados en sistemas</li>
                <li>• Comportamiento sospechoso de usuarios</li>
                <li>• Vulnerabilidades de seguridad descubiertas</li>
                <li>• Incumplimiento de políticas de seguridad</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </Section>

      {/* Cultura de Seguridad */}
      <Section title="Cultura de Seguridad" className="bg-gray-50">
        <ContentCard
          title="Responsabilidad Compartida"
          icon={<Users className="w-6 h-6 text-green-600" />}
        >
          <p className="text-gray-700 mb-4">
            La auditoría evaluará el compromiso de todo el personal con la seguridad de la información. Cada uno de ustedes es responsable de:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Responsabilidades Individuales</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✓ Proteger los activos de información</li>
                <li>✓ Reportar incidentes de seguridad</li>
                <li>✓ Cumplir con políticas de seguridad</li>
                <li>✓ Participar en capacitaciones</li>
                <li>✓ Usar contraseñas seguras</li>
                <li>✓ No compartir credenciales</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Comportamientos Esperados</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✓ Ser vigilante ante amenazas</li>
                <li>✓ Pensar en seguridad en cada tarea</li>
                <li>✓ Comunicar riesgos identificados</li>
                <li>✓ Colaborar en auditorías</li>
                <li>✓ Mejorar continuamente</li>
                <li>✓ Ser ejemplo para otros</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </Section>

      {/* Preguntas Frecuentes */}
      <Section title="Preguntas Frecuentes en Auditorías">
        <div className="space-y-4">
          <ContentCard title="¿Cuál es tu rol en la seguridad de la información?">
            <p className="text-gray-700">
              Debes ser capaz de explicar claramente tu rol específico, tus responsabilidades en seguridad y cómo contribuyes al SGSI de Refácil.
            </p>
          </ContentCard>

          <ContentCard title="¿Cómo aplicas los principios C-I-D en tu trabajo?">
            <p className="text-gray-700">
              Prepara ejemplos específicos de cómo implementas Confidencialidad, Integridad y Disponibilidad en tus tareas diarias.
            </p>
          </ContentCard>

          <ContentCard title="¿Qué harías ante un incidente de seguridad?">
            <p className="text-gray-700">
              Debes conocer el procedimiento de reporte: contactar inmediatamente a {INCIDENT_EMAIL}, documentar lo ocurrido y cooperar con la investigación.
            </p>
          </ContentCard>

          <ContentCard title="¿Cómo proteges los activos bajo tu responsabilidad?">
            <p className="text-gray-700">
              Describe los controles que implementas (físicos, lógicos, administrativos) para proteger los activos de información que manejas.
            </p>
          </ContentCard>

          <ContentCard title="¿Conoces las políticas de seguridad de Refácil?">
            <p className="text-gray-700">
              Debes estar familiarizado con las políticas principales (PO-GI-10, PO-GI-08, PO-GI-06) y cómo se aplican en tu área.
            </p>
          </ContentCard>

          <ContentCard title="¿Cómo manejas información confidencial?">
            <p className="text-gray-700">
              Explica cómo clasificas la información, cómo la proteges, quién tiene acceso y cómo evitas divulgación no autorizada.
            </p>
          </ContentCard>
        </div>
      </Section>

      {/* Información de Contacto */}
      <Section title="Información de Contacto" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard
            title="Reporte de Incidentes"
            icon={<Mail className="w-6 h-6 text-red-600" />}
          >
            <p className="text-gray-700 mb-3">
              Para reportar cualquier incidente de seguridad:
            </p>
            <a
              href={`mailto:${INCIDENT_EMAIL}`}
              className="inline-block text-red-600 font-semibold hover:text-red-700"
            >
              {INCIDENT_EMAIL}
            </a>
          </ContentCard>

          <ContentCard
            title="Información de la Empresa"
            icon={<Users className="w-6 h-6 text-green-600" />}
          >
            <p className="text-gray-700 text-sm">
              <strong>Empresa:</strong> Refácil (Super Pagos S.A.S.)<br />
              <strong>NIT:</strong> 900.616.155-2<br />
              <strong>Ubicación:</strong> Cra. 16 Bis #8-24, Pereira, Colombia
            </p>
          </ContentCard>
        </div>
      </Section>

      {/* Checklist de Preparación */}
      <Section title="Checklist de Preparación">
        <ContentCard title="Antes de la Auditoría">
          <div className="space-y-3">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">He revisado los principios C-I-D de ISO 27001</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">Conozco las políticas PO-GI-10, PO-GI-08 y PO-GI-06</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">Entiendo mi rol específico en el SGSI</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">Puedo explicar los riesgos de seguridad para Fintech</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">Sé cómo reportar incidentes de seguridad</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">Tengo ejemplos de cómo aplico seguridad en mi trabajo</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">He revisado los controles en mi área de responsabilidad</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">Entiendo cómo proteger los activos bajo mi responsabilidad</span>
            </label>
          </div>
        </ContentCard>
      </Section>

      <Footer />
    </div>
  );
}
