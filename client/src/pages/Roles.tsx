import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import { Users, Code, Cloud, Headphones, Shield, Briefcase } from "lucide-react";

export default function Roles() {
  const roles = [
    {
      title: "CTO / Liderazgo Tecnológico",
      icon: <Briefcase className="w-8 h-8 text-cyan-600" />,
      responsabilidad_general:
        "Liderazgo, Gestión de recursos y activos de Información.",
      responsabilidad_ti:
        "Asegurar que la estrategia tecnológica se alinee con los requisitos de seguridad (Security by Design).",
      acciones: [
        "Definir una estrategia tecnológica alineada con seguridad",
        "Gestionar presupuesto e implementación de herramientas de seguridad",
        "Liderar con el ejemplo en la adopción de prácticas seguras",
        "Participar, proponer y colaborar en decisiones estratégicas de seguridad",
      ],
    },
    {
      title: "Product Owners (PO)",
      icon: <Briefcase className="w-8 h-8 text-cyan-600" />,
      responsabilidad_general:
        "Definir los requisitos de seguridad como historias de usuario o criterios de aceptación.",
      responsabilidad_ti:
        "Asegurar que las funcionalidades desarrolladas cumplan con los controles de seguridad definidos por el Sistema de Gestión de Seguridad de la Información.",
      acciones: [
        "Incluir requisitos de seguridad en el backlog",
        "Validar que los desarrollos cumplen con políticas",
        "Participar en análisis de riesgos de proyectos",
        "Comunicar requisitos de seguridad al equipo de desarrollo",
      ],
    },
    {
      title: "Desarrolladores",
      icon: <Code className="w-8 h-8 text-cyan-600" />,
      responsabilidad_general: "Implementar código seguro y aplicar buenas prácticas de desarrollo seguro.",
      responsabilidad_ti:
        "Realizar code reviews con enfoque en seguridad, evitar vulnerabilidades comunes (OWASP Top 10) y usar herramientas de análisis estático (SAST).",
      acciones: [
        "Aplicar principios de Security by Design",
        "Realizar code reviews enfocados en seguridad",
        "Usar herramientas SAST para análisis de código",
        "Capacitarse en desarrollo seguro",
        {
          text: "Evitar vulnerabilidades comunes (OWASP Top 10)",
          link: "https://owasp.org/Top10/es/",
        },
      ],
    },
    {
      title: "QA (Aseguramiento de Calidad)",
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      responsabilidad_general: "Incluir pruebas de seguridad en el ciclo de pruebas.",
      responsabilidad_ti:
        "Ejecutar pruebas funcionales de los controles de acceso.",
      acciones: [
        "Diseñar casos de prueba de seguridad",
        "Validar controles de acceso",
        "Documentar hallazgos de seguridad",
        "Verificar cumplimiento de políticas",
      ],
    },
    {
      title: "Ingenieros de Cloud (AWS)",
      icon: <Cloud className="w-8 h-8 text-cyan-600" />,
      responsabilidad_general: "Implementar y mantener la infraestructura de TI de forma segura.",
      responsabilidad_ti:
        "Configurar la seguridad de la nube (IAM, grupos de seguridad, cifrado de datos en reposo y en tránsito) y asegurar el cumplimiento de la política de activos.",
      acciones: [
        "Configurar IAM con principio de mínimo privilegio",
        "Implementar cifrado de datos",
        "Gestionar secretos de forma segura",
        "Gestionar permisos de acceso de usuarios",
        "Monitorear vulnerabilidades (Orca) y aplicar parches",
        "Ayudar a mantener el inventario de activos actualizado",
      ],
    },
    {
      title: "Analistas de Soporte TI",
      icon: <Headphones className="w-8 h-8 text-cyan-600" />,
      responsabilidad_general: "Gestionar y reportar incidentes de seguridad.",
      responsabilidad_ti:
        "Aplicar la política de control de accesos (API), asegurar la correcta gestión de activos físicos y lógicos.",
      acciones: [
        "Ayudar a mantener actualizado el inventario de activos físicos y lógicos",
        "Reportar incidentes al correo oficial",
        "Validar cumplimiento de políticas",
      ],
    },
    {
      title: "Oficial de Seguridad de la Información (CISO)",
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      responsabilidad_general:
        "Desarrollar, mantener y promover las políticas de seguridad.",
      responsabilidad_ti:
        "Asesorar a los propietarios de activos, gestionar el riesgo y coordinar la respuesta a incidentes.",
      acciones: [
        "Desarrollar y mantener políticas de seguridad",
        "Gestionar riesgos de seguridad",
        "Coordinar respuesta a incidentes",
        "Capacitar al personal en seguridad",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Roles y Responsabilidades en TI</h1>
          <p className="text-lg text-purple-100">
            La seguridad es una responsabilidad compartida
          </p>
        </div>
      </section>

      {/* Introducción */}
      <Section title="Introducción" className="bg-gray-50">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            La seguridad de la información es una responsabilidad compartida en toda la organización. Cada rol tiene responsabilidades específicas en el contexto de la auditoría ISO 27001 y el desarrollo seguro.
          </p>
          <p className="text-gray-700">
            A continuación, se detallan los roles clave en el área de TI y sus responsabilidades específicas para asegurar que Refácil cumpla con los requisitos de la norma ISO 27001.
          </p>
        </div>
      </Section>

      {/* Roles Detallados */}
      <Section title="Roles y Responsabilidades Específicas">
        <div className="space-y-6">
          {roles.map((rol, index) => (
            <div key={index} className="border-l-4 border-purple-600 pl-6">
              <ContentCard
                title={rol.title}
                icon={rol.icon}
                variant="default"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsabilidad General</h4>
                    <p className="text-gray-700">{rol.responsabilidad_general}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsabilidad en TI</h4>
                    <p className="text-gray-700">{rol.responsabilidad_ti}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Acciones Clave</h4>
                    <ul className="space-y-2">
                      {rol.acciones.map((accion, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-purple-600 font-bold mt-1">→</span>
                          {typeof accion === "string" ? (
                            <span>{accion}</span>
                          ) : (
                            <a
                              href={accion.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 underline"
                            >
                              {accion.text}
                            </a>
                          )}
                            
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

     {/* Matriz de Responsabilidades */}
      <Section title="Matriz de Responsabilidades RACI" className="bg-gray-50">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                  Actividad
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  CTO
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  PO
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  Dev
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  QA
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  Cloud
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  Soporte
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  CISO
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { actividad: "Definir requisitos de seguridad", roles: ["A", "R", "I", "I", "I", "I", "C"] },
                { actividad: "Implementar código seguro", roles: ["A", "C", "R", "I", "I", "I", "C"] },
                { actividad: "Pruebas de seguridad", roles: ["A", "C", "C", "R", "R", "I", "C"] },
                { actividad: "Configurar IAM/Cifrado", roles: ["A", "I", "I", "I", "R", "I", "C"] },
                { actividad: "Gestionar accesos de usuarios", roles: ["A", "I", "I", "I", "R", "R", "C"] },
                { actividad: "Reportar incidentes", roles: ["R", "R", "R", "R", "R", "R", "A"] },
                { actividad: "Auditoría de seguridad", roles: ["C", "C", "C", "C", "C", "C", "R"] },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    {row.actividad}
                  </td>
                  {row.roles.map((role, j) => (
                    <td
                      key={j}
                      className="border border-gray-200 px-4 py-3 text-center font-semibold"
                    >
                      <span
                        className={`inline-block px-2 py-1 rounded text-white text-sm ${
                          role === "R"
                            ? "bg-red-600"
                            : role === "A"
                            ? "bg-blue-600"
                            : role === "C"
                            ? "bg-yellow-600"
                            : role === "I"
                            ? "bg-gray-600"
                            : "text-gray-400"
                        }`}
                      >
                        {role}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          <strong>R</strong> = Responsable | <strong>A</strong> = Aprobador | <strong>C</strong> = Consultado | <strong>I</strong> = Informado
        </p>
      </Section>

      <Footer />
    </div>
  );
}
