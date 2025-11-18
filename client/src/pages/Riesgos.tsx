import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import { AlertTriangle, TrendingUp, Lock, Server, Users, Shield } from "lucide-react";

export default function Riesgos() {
  const riesgos = [
    {
      titulo: "Fraude Digital y Transaccional",
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      descripcion:
        "Ataques dirigidos a los canales de pago, suplantación de identidad (phishing, smishing) para obtener credenciales, y manipulación de transacciones.",
      impacto: "Pérdidas financieras directas, daño a la reputación, pérdida de confianza de clientes y posibles sanciones regulatorias.",
      control:
        "Implementación de controles de No Repudio y Trazabilidad (PO-GI-08), validación de seguridad en proyectos (PO-GI-10), autenticación multifactor, monitoreo de transacciones anómalas.",
      probabilidad: "Alta",
      severidad: "Crítica",
    },
    {
      titulo: "Brechas de Datos Personales (Ley 1581)",
      icon: <Lock className="w-8 h-8 text-red-600" />,
      descripcion:
        "Filtración o acceso no autorizado a datos sensibles de clientes y comercios debido a configuraciones erróneas en la nube o vulnerabilidades en las aplicaciones.",
      impacto: "Sanciones regulatorias significativas, daño a la reputación, responsabilidad legal, pérdida de confianza de clientes.",
      control:
        "Clasificación y protección de activos de información (PO-GI-06), aseguramiento de la Confidencialidad, cifrado de datos, control de accesos, auditorías de seguridad.",
      probabilidad: "Media",
      severidad: "Crítica",
    },
    {
      titulo: "Indisponibilidad del Servicio",
      icon: <Server className="w-8 h-8 text-red-600" />,
      descripcion:
        "Caída de la plataforma transaccional por ataques DDoS, fallas de infraestructura en la nube o errores de despliegue.",
      impacto: "Interrupción de operaciones, pérdida de ingresos, insatisfacción de clientes, impacto en miles de micro comercios.",
      control:
        "Asegurar la Disponibilidad mediante redundancia, backups regulares, planes de recuperación ante desastres, monitoreo 24/7, pruebas de continuidad.",
      probabilidad: "Media",
      severidad: "Crítica",
    },
    {
      titulo: "Vulnerabilidades en el Código Fuente",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      descripcion:
        "Introducción de fallas de seguridad en el software durante el desarrollo (ej. inyección SQL, XSS), permitiendo a atacantes comprometer el sistema.",
      impacto: "Acceso no autorizado, manipulación de datos, compromiso de sistemas, exposición de información sensible.",
      control:
        "Aplicación del ciclo de vida de desarrollo seguro (responsabilidad de Desarrolladores y QA), validación de seguridad en proyectos (PO-GI-10), SAST, code reviews, pruebas de seguridad.",
      probabilidad: "Alta",
      severidad: "Alta",
    },
    {
      titulo: "Riesgo de Terceros y Proveedores",
      icon: <Users className="w-8 h-8 text-red-600" />,
      descripcion:
        "Un proveedor o corresponsal con acceso a la información de Refácil sufre un incidente de seguridad que afecta a la empresa.",
      impacto: "Compromiso de información, interrupción de servicios, responsabilidad legal, daño a la reputación.",
      control:
        "Cláusulas contractuales de seguridad, evaluación periódica de activos de terceros (PO-GI-06), auditorías de proveedores, monitoreo de cumplimiento.",
      probabilidad: "Alta",
      severidad: "Alta",
    },
    {
      titulo: "Acceso No Autorizado a Sistemas",
      icon: <Lock className="w-8 h-8 text-red-600" />,
      descripcion:
        "Acceso no autorizado a sistemas críticos por credenciales débiles, falta de autenticación multifactor, o gestión inadecuada de accesos.",
      impacto: "Compromiso de sistemas, robo de datos, manipulación de información, interrupción de servicios.",
      control:
        "Implementación de control de accesos basado en roles (RBAC), autenticación multifactor, principio de mínimo privilegio, auditoría de accesos, gestión de identidades.",
      probabilidad: "Alta",
      severidad: "Alta",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Riesgos de Seguridad para Fintech</h1>
          <p className="text-lg text-red-100">
            Riesgos críticos que Refácil debe mitigar como empresa Fintech
          </p>
        </div>
      </section>

      {/* Introducción */}
      <Section title="Introducción" className="bg-gray-50">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Como empresa Fintech que opera una plataforma transaccional, Refácil se enfrenta a riesgos de seguridad críticos que serán foco principal de la auditoría interna de ISO 27001.
          </p>
          <p className="text-gray-700">
            A continuación, se detallan los principales riesgos identificados, su impacto potencial y los controles que implementamos para mitigarlos.
          </p>
        </div>
      </Section>

      {/* Riesgos Detallados */}
      <Section title="Riesgos Identificados">
        <div className="space-y-6">
          {riesgos.map((riesgo, index) => (
            <div key={index} className="border-l-4 border-red-600 pl-6">
              <ContentCard
                title={riesgo.titulo}
                icon={riesgo.icon}
                variant="default"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Descripción</h4>
                    <p className="text-gray-700">{riesgo.descripcion}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Impacto Potencial</h4>
                    <p className="text-gray-700">{riesgo.impacto}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-200">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">Probabilidad</p>
                      <p
                        className={`text-sm font-bold mt-1 ${
                          riesgo.probabilidad === "Alta"
                            ? "text-red-600"
                            : riesgo.probabilidad === "Media"
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        {riesgo.probabilidad}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">Severidad</p>
                      <p
                        className={`text-sm font-bold mt-1 ${
                          riesgo.severidad === "Crítica"
                            ? "text-red-600"
                            : riesgo.severidad === "Alta"
                            ? "text-orange-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {riesgo.severidad}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Controles Implementados</h4>
                    <p className="text-gray-700">{riesgo.control}</p>
                  </div>
                </div>
              </ContentCard>
            </div>
          ))}
        </div>
      </Section>

      {/* Matriz de Riesgos */}
      <Section title="Matriz de Riesgos" className="bg-gray-50">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Evaluación de Riesgos (Probabilidad vs Severidad)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-900">Riesgo Bajo</p>
                <p className="text-xs text-green-700 mt-1">Baja probabilidad, baja severidad</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-yellow-900">Riesgo Medio</p>
                <p className="text-xs text-yellow-700 mt-1">Media probabilidad o severidad</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-orange-900">Riesgo Alto</p>
                <p className="text-xs text-orange-700 mt-1">Alta probabilidad o severidad</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-red-900">Riesgo Crítico</p>
                <p className="text-xs text-red-700 mt-1">Alta probabilidad y severidad</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-2 font-semibold text-gray-900">Riesgo</th>
                  <th className="text-center p-2 font-semibold text-gray-900">Probabilidad</th>
                  <th className="text-center p-2 font-semibold text-gray-900">Severidad</th>
                  <th className="text-center p-2 font-semibold text-gray-900">Nivel</th>
                </tr>
              </thead>
              <tbody>
                {riesgos.map((riesgo, i) => {
                  const nivel =
                    riesgo.probabilidad === "Alta" && riesgo.severidad === "Crítica"
                      ? "Crítico"
                      : riesgo.probabilidad === "Alta" || riesgo.severidad === "Crítica"
                      ? "Alto"
                      : "Medio";
                  const color =
                    nivel === "Crítico"
                      ? "bg-red-100 text-red-900"
                      : nivel === "Alto"
                      ? "bg-orange-100 text-orange-900"
                      : "bg-yellow-100 text-yellow-900";

                  return (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="p-2 text-gray-900">{riesgo.titulo}</td>
                      <td className="p-2 text-center text-gray-700">{riesgo.probabilidad}</td>
                      <td className="p-2 text-center text-gray-700">{riesgo.severidad}</td>
                      <td className="p-2 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
                          {nivel}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Recomendaciones */}
      <Section title="Recomendaciones para Mitigar Riesgos">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard title="Para el Equipo de Desarrollo">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Implementar Security by Design en todos los proyectos</li>
              <li>✓ Realizar code reviews con enfoque en seguridad</li>
              <li>✓ Usar herramientas SAST para análisis de código</li>
              <li>✓ Capacitarse en OWASP Top 10</li>
              <li>✓ Validar todas las entradas de usuario</li>
            </ul>
          </ContentCard>

          <ContentCard title="Para Infraestructura (Cloud/AWS)">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Configurar IAM con mínimo privilegio</li>
              <li>✓ Implementar cifrado de datos</li>
              <li>✓ Mantener backups actualizados</li>
              <li>✓ Monitorear accesos y cambios</li>
              <li>✓ Implementar redundancia y alta disponibilidad</li>
            </ul>
          </ContentCard>

          <ContentCard title="Para QA y Testing">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Incluir pruebas de seguridad en el ciclo de pruebas</li>
              <li>✓ Ejecutar pruebas de penetración regularmente</li>
              <li>✓ Validar controles de acceso</li>
              <li>✓ Documentar hallazgos de seguridad</li>
              <li>✓ Verificar cumplimiento de políticas</li>
            </ul>
          </ContentCard>

          <ContentCard title="Para Gestión General">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Evaluar regularmente a proveedores y terceros</li>
              <li>✓ Mantener inventario actualizado de activos</li>
              <li>✓ Reportar incidentes inmediatamente</li>
              <li>✓ Participar en capacitaciones de seguridad</li>
              <li>✓ Cumplir con políticas de seguridad</li>
            </ul>
          </ContentCard>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
