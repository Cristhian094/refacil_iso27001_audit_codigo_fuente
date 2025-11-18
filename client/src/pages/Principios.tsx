import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import { Lock, Shield, Zap } from "lucide-react";

export default function Principios() {
  const principios = [
    {
      title: "Confidencialidad",
      icon: <Lock className="w-8 h-8 text-cyan-600" />,
      definition: "Garantizar que la información solo sea accesible por aquellos autorizados.",
      importancia:
        "Proteger los datos personales y financieros de clientes y la información estratégica de la empresa contra divulgación no autorizada.",
      controles: [
        "Cifrado de datos en tránsito y en reposo",
        "Control de accesos basado en roles (RBAC)",
        "Clasificación de información",
        "Restricción de acceso a datos sensibles",
      ],
    },
    {
      title: "Integridad",
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      definition: "Mantener la exactitud y completitud de la información y los métodos de procesamiento.",
      importancia:
        "Asegurar que las transacciones y los datos de la plataforma Refácil no sean alterados o manipulados de forma indebida.",
      controles: [
        "Firmas digitales",
        "Hashes criptográficos",
        "Auditoría de cambios",
        "Validación de datos",
      ],
    },
    {
      title: "Disponibilidad",
      icon: <Zap className="w-8 h-8 text-cyan-600" />,
      definition: "Asegurar que la información y los sistemas estén accesibles y utilizables cuando se requieran.",
      importancia:
        "Garantizar la continuidad del servicio de la plataforma transaccional para miles de micro comercios, evitando interrupciones operacionales.",
      controles: [
        "Redundancia de sistemas",
        "Backups regulares",
        "Planes de recuperación ante desastres",
        "Monitoreo 24/7",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Principios Fundamentales de ISO 27001</h1>
          <p className="text-lg text-cyan-100">
            La Tríada C-I-D: Confidencialidad, Integridad y Disponibilidad
          </p>
        </div>
      </section>

      {/* Introducción */}
      <Section title="Introducción" className="bg-gray-50">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            La norma ISO/IEC 27001:2022 se fundamenta en la protección de los tres pilares de la seguridad de la información, conocidos como la <strong>Tríada C-I-D</strong>. Estos principios son fundamentales para entender cómo protegemos los activos de información en Refácil.
          </p>
          <p className="text-gray-700">
            Cada principio representa un aspecto diferente de la seguridad, y juntos forman la base de todas las políticas y controles de seguridad que implementamos en la empresa.
          </p>
        </div>
      </Section>

      {/* Principios Detallados */}
      <Section title="Los Tres Pilares de la Seguridad">
        <div className="space-y-8">
          {principios.map((principio, index) => (
            <div key={index} className="border-l-4 border-cyan-600 pl-6">
              <ContentCard
                title={principio.title}
                icon={principio.icon}
                variant="highlight"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Definición</h4>
                    <p className="text-gray-700">{principio.definition}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Importancia para Refácil</h4>
                    <p className="text-gray-700">{principio.importancia}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ejemplos de Controles</h4>
                    <ul className="space-y-2">
                      {principio.controles.map((control, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-cyan-600 font-bold mt-1">•</span>
                          <span>{control}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ContentCard>
            </div>
          ))}
        </div>
      </Section>

      {/* Aplicación Práctica */}
      <Section title="Aplicación Práctica en Refácil" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentCard
            title="En Desarrollo"
            description="Los desarrolladores deben implementar código seguro"
          >
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Usar cifrado para datos sensibles</li>
              <li>✓ Validar todas las entradas de usuario</li>
              <li>✓ Implementar controles de acceso</li>
              <li>✓ Registrar todas las acciones críticas</li>
            </ul>
          </ContentCard>

          <ContentCard
            title="En Infraestructura"
            description="Los ingenieros de cloud deben asegurar la plataforma"
          >
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Configurar IAM correctamente</li>
              <li>✓ Realizar escaneos de seguridad mediante Orca y mitigación de vulnerabilidades</li>
              <li>✓ Mantener backups actualizados</li>
              <li>✓ Monitorear accesos y cambios</li>
            </ul>
          </ContentCard>

          <ContentCard
            title="En General"
            description="El personal de Refácil debe seguir buenas prácticas"
          >
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Aplicar principio de mínimo privilegio</li>
              <li>✓ Ayudar a mantener inventario de activos</li>
              <li>✓ Reportar incidentes inmediatamente</li>
              <li>✓ Cumplir políticas de seguridad</li>
            </ul>
          </ContentCard>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
