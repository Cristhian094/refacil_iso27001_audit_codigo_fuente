import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import { FileText, AlertCircle } from "lucide-react";

export default function Politicas() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Resumen de Políticas de Seguridad</h1>
          <p className="text-lg text-blue-100">
            PO-GI-08 Política General de la Seguridad de la Información, PO-GI-02 Política de Uso aceptable de Activos de Información, PO-GI-06 Política de Administración de Activos de Información y PO-GI-10 Política para la Gestión de Seguridad de la Información en Proyectos
          </p>
        </div>
      </section>

      {/* PO-GI-08 */}
      <Section title="PO-GI-08: Política General de la Seguridad de la Información" className="bg-gray-50">
        <div className="space-y-4">
          <ContentCard
            title="Objetivo"
            icon={<FileText className="w-6 h-6 text-blue-600" />}
          >
            <p className="text-gray-700">
              Establecer el marco general para gestionar la seguridad de la información en Super Pagos S.A.S. (Refácil) de acuerdo con la norma ISO/IEC 27001:2022. Se busca proteger los activos de información de la organización, preservando su confidencialidad, integridad y disponibilidad.
            </p>
          </ContentCard>

          <ContentCard title="Principios Fundamentales">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Confidencialidad:</strong> Garantizar que la información solo sea accesible por personas autorizadas</li>
              <li><strong>Integridad:</strong> Mantener la exactitud y completitud de la información y de los sistemas</li>
              <li><strong>Disponibilidad:</strong> Asegurar que la información y los recursos estén disponibles cuando se requieran</li>
              <li><strong>Legalidad:</strong> Cumplir con todas las leyes, regulaciones y obligaciones contractuales aplicables</li>
              <li><strong>Trazabilidad y No Repudio:</strong> Mantener la capacidad de rastrear todas las acciones realizadas sobre la información</li>
              <li><strong>Transparencia y Privacidad:</strong> Tratar los datos de manera transparente y respetar la privacidad como derecho fundamental</li>
            </ul>
          </ContentCard>

          <ContentCard
            title="⚠️ Gestión de Incidentes"
            variant="warning"
            icon={<AlertCircle className="w-6 h-6 text-red-600" />}
          >
            <p className="text-gray-700 font-semibold mb-3">
              Ante cualquier incidente o sospecha de incidente de seguridad de la información, se debe reportar inmediatamente al correo:
            </p>
            <a
              href="mailto:incidentes.seguridad@refacil.com"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              incidentes.seguridad@refacil.com
            </a>
          </ContentCard>

          <ContentCard title="Compromiso de la Alta Dirección">
            <p className="text-gray-700 mb-3">
              La Alta Dirección de Super Pagos S.A.S. manifiesta su total compromiso y apoyo hacia la seguridad de la información y la implementación del SGSI conforme a ISO/IEC 27001:2022.
            </p>
            <p className="text-gray-700">
              La Gerencia se responsabiliza de proveer los recursos necesarios (financieros, humanos y tecnológicos) para establecer, operar, mantener y mejorar continuamente el SGSI, y se compromete a liderar con el ejemplo, fomentando una cultura de seguridad en toda la organización.
            </p>
          </ContentCard>
        </div>
      </Section>

            {/* PO-GI-02 */}
      <Section title="PO-GI-02: Política de Uso Aceptable de Activos de Información">
        <div className="space-y-4">
          
          <ContentCard title="Objetivo" icon={<FileText className="w-6 h-6 text-blue-600" />}>
            <p className="text-gray-700">
              Establecer las directrices para el uso adecuado de los activos de información de Super Pagos, 
              garantizando la protección de la confidencialidad, integridad y disponibilidad, en cumplimiento 
              con ISO 27001 y la política de administración de activos.
            </p>
          </ContentCard>

          <ContentCard title="Alcance">
            <p className="text-gray-700 mb-3">
              Aplica a todo el personal que tenga acceso a activos de información, sin importar ubicación o dispositivo:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Empleados, contratistas, consultores, temporales</li>
              <li>✓ Sistemas, redes, aplicaciones, bases de datos</li>
              <li>✓ Equipos físicos, software, servicios en la nube</li>
              <li>✓ Accesos lógicos y credenciales relacionadas</li>
            </ul>
          </ContentCard>

          <ContentCard title="Principios de Uso Aceptable">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Uso autorizado:</strong> Solo para fines laborales legítimos.</li>
              <li><strong>Confidencialidad:</strong> Proteger información sensible y evitar divulgación no autorizada.</li>
              <li><strong>Integridad:</strong> No alterar o eliminar información sin autorización.</li>
              <li><strong>Disponibilidad:</strong> Evitar acciones que afecten la operación o los sistemas.</li>
              <li><strong>Cumplimiento:</strong> Respetar leyes, licencias y políticas internas.</li>
              <li><strong>Responsabilidad:</strong> Las credenciales son personales e intransferibles.</li>
              <li><strong>Mínimo privilegio:</strong> Acceder solo a lo estrictamente necesario.</li>
              <li><strong>Reporte:</strong> Informar incidentes, usos indebidos o vulnerabilidades.</li>
            </ul>
          </ContentCard>

          <ContentCard title="Responsabilidades de los Usuarios">
            <ul className="space-y-2 text-gray-700">
              <li>Proteger credenciales y usar MFA cuando aplique.</li>
              <li>Usar los recursos de forma eficiente y sin afectar la operación.</li>
              <li>Mantener seguros los dispositivos, con antivirus y actualizaciones.</li>
              <li>No instalar software no autorizado.</li>
              <li>Evitar sitios sospechosos y correos maliciosos.</li>
              <li>Manejar la información según su clasificación.</li>
              <li>Realizar copias de seguridad según lineamientos.</li>
              <li>Reportar pérdidas, robos o cambios en activos.</li>
            </ul>
          </ContentCard>

          <ContentCard title="Directrices por Tipo de Activo">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Activos Físicos</h4>
                <p className="text-gray-700 text-sm">
                  Cuidado adecuado, uso laboral, protección de dispositivos, control de USB, manejo seguro de impresiones.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Activos Lógicos</h4>
                <p className="text-gray-700 text-sm">
                  Acceso solo autorizado, uso de software licenciado, protección de cuentas, navegación segura e internet responsable.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Activos Documentales</h4>
                <p className="text-gray-700 text-sm">
                  Manejo según clasificación, uso del sistema documental, control de versiones y protección contra divulgación.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Activos Intangibles</h4>
                <p className="text-gray-700 text-sm">
                  Protección de conocimientos, respeto por propiedad intelectual y cuidado de la imagen corporativa.
                </p>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Uso de Dispositivos Personales y Acceso Remoto">
            <ul className="space-y-2 text-gray-700">
              <li>Acceso con autorización y siguiendo requisitos de seguridad.</li>
              <li>Separación entre información personal y corporativa.</li>
              <li>Dispositivos protegidos con PIN, antivirus y cifrado.</li>
              <li>Acceso remoto solo mediante VPN y MFA.</li>
              <li>Evitar redes públicas inseguras.</li>
            </ul>
          </ContentCard>

          <ContentCard title="Retención y Eliminación de Información">
            <ul className="space-y-2 text-gray-700">
              <li>Retener datos según requisitos legales y operativos.</li>
              <li>Eliminar de forma segura cuando ya no sea necesario.</li>
            </ul>
          </ContentCard>

          <ContentCard title="Devolución de Activos">
            <p className="text-gray-700">
              Al finalizar la relación laboral se deben devolver todos los activos físicos y lógicos; 
              se revocan accesos y se elimina la información corporativa en dispositivos personales.
            </p>
          </ContentCard>

          <ContentCard title="Capacitación y Concientización">
            <p className="text-gray-700">
              Todos los usuarios deben recibir capacitación periódica y firmar compromiso de cumplimiento.
            </p>
          </ContentCard>

          <ContentCard title="Consecuencias del Incumplimiento">
            <ul className="space-y-2 text-gray-700">
              <li>Medidas disciplinarias internas.</li>
              <li>Limitación o revocación de accesos.</li>
              <li>Acciones legales y responsabilidad civil/penal.</li>
            </ul>
          </ContentCard>

        </div>
      </Section>


      {/* PO-GI-10 */}
      <Section title="PO-GI-10: Política para la Gestión de Seguridad de la Información en Proyectos">
        <div className="space-y-4">
          <ContentCard
            title="Objetivo"
            icon={<FileText className="w-6 h-6 text-blue-600" />}
          >
            <p className="text-gray-700">
              Garantizar que todos los proyectos de Refácil, especialmente los relacionados con plataformas de pagos electrónicos, digitalización de servicios, infraestructura tecnológica, corresponsalía financiera y seguridad transaccional, integren de manera obligatoria los requisitos de seguridad de la información desde su concepción hasta su cierre.
            </p>
          </ContentCard>

          <ContentCard title="Alcance">
            <ul className="space-y-2 text-gray-700">
              <li>✓ Proyectos estratégicos de innovación en pagos digitales y nuevos canales electrónicos</li>
              <li>✓ Proyectos de infraestructura tecnológica y redes seguras</li>
              <li>✓ Proyectos de cumplimiento regulatorio (Supersolidaria, SARO, SAGRILAFT, Habeas Data, Ley 1581)</li>
              <li>✓ Proyectos de tercerización de servicios financieros con proveedores tecnológicos</li>
              <li>✓ Proyectos de continuidad de negocio y recuperación ante desastres (BCP/DRP)</li>
            </ul>
          </ContentCard>

          <ContentCard title="Principios Clave">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Protección de clientes y transacciones:</strong> Todo proyecto debe garantizar que los datos personales y financieros de clientes estén protegidos contra accesos no autorizados o fraudes.</li>
              <li><strong>Confianza y transparencia:</strong> Los servicios deben mantener disponibilidad y confiabilidad para clientes, corresponsales y aliados.</li>
              <li><strong>Cumplimiento normativo:</strong> Todo proyecto debe alinearse con la regulación aplicable.</li>
              <li><strong>Riesgo controlado:</strong> Ningún proyecto podrá avanzar sin análisis y tratamiento de riesgos de seguridad.</li>
              <li><strong>Continuidad del servicio:</strong> Cada iniciativa deberá planificar controles que eviten interrupciones.</li>
            </ul>
          </ContentCard>

          <ContentCard title="Responsabilidades">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Alta Dirección:</strong> Aprobar proyectos estratégicos y asignar recursos</li>
              <li><strong>Comité de Seguridad de la Información (CSI):</strong> Supervisar la gestión de seguridad en proyectos críticos</li>
              <li><strong>Líderes de Proyecto:</strong> Incorporar controles de seguridad en planes, contratos y entregables</li>
              <li><strong>Área de Seguridad de la Información:</strong> Validar análisis de riesgos y definir controles específicos</li>
              <li><strong>Proveedores y corresponsales:</strong> Cumplir con obligaciones de seguridad establecidas en contratos</li>
            </ul>
          </ContentCard>
        </div>
      </Section>

      {/* PO-GI-06 */}
      <Section title="PO-GI-06: Política de Administración de Activos de Información">
        <div className="space-y-4">
          <ContentCard
            title="Objetivo"
            icon={<FileText className="w-6 h-6 text-blue-600" />}
          >
            <p className="text-gray-700">
              Establecer las directrices y responsabilidades para la gestión integral de los activos de información de la organización, asegurando su identificación, clasificación, protección, trazabilidad y gestión a lo largo de todo su ciclo de vida, en cumplimiento con los requisitos de la norma ISO 27001:2022.
            </p>
          </ContentCard>

          <ContentCard title="Alcance">
            <p className="text-gray-700 mb-3">
              Esta política aplica a todos los activos de información de la organización, en cualquier formato (físico o digital):
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Sistemas, aplicaciones, infraestructura, datos, documentos, servicios</li>
              <li>✓ Conocimiento del personal clave</li>
              <li>✓ Activos en la nube (SaaS, PaaS, IaaS)</li>
              <li>✓ Dispositivos móviles</li>
              <li>✓ Activos gestionados por terceros</li>
            </ul>
          </ContentCard>

          <ContentCard title="Tipos de Activos">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Activos Físicos</h4>
                <p className="text-gray-700 text-sm">Servidores, computadores, dispositivos móviles, impresoras, USB</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Activos Lógicos</h4>
                <p className="text-gray-700 text-sm">Sistemas, software, bases de datos, cuentas de usuario, licencias</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Activos Documentales</h4>
                <p className="text-gray-700 text-sm">Contratos, manuales, políticas, bases de datos físicas</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Activos Intangibles</h4>
                <p className="text-gray-700 text-sm">Conocimientos, capacidades del personal, imagen corporativa</p>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Clasificación CID">
            <p className="text-gray-700 mb-3">
              Cada activo se clasifica según su nivel de:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Confidencialidad (C):</strong> Protección contra divulgación no autorizada</li>
              <li><strong>Integridad (I):</strong> Protección contra modificación no autorizada</li>
              <li><strong>Disponibilidad (D):</strong> Acceso cuando se requiere</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Cada dimensión se clasifica como Alto, Medio o Bajo según el análisis de riesgos.
            </p>
          </ContentCard>

          <ContentCard title="Responsabilidades">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Propietarios de Activos:</strong> Clasificar según CID y definir requisitos de protección</li>
              <li><strong>Custodios de Activos:</strong> Implementar y mantener los controles de seguridad definidos</li>
              <li><strong>Usuarios:</strong> Utilizar los activos de forma autorizada y reportar incidentes</li>
              <li><strong>Área de TI:</strong> Mantener inventario actualizado e implementar controles técnicos</li>
              <li><strong>CISO:</strong> Desarrollar, mantener y promover la política</li>
            </ul>
          </ContentCard>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
