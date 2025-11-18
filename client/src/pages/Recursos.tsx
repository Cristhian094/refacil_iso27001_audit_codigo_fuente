import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import { BookOpen, ExternalLink, FileText } from "lucide-react";

export default function Recursos() {
  const recursos = [
    {
      titulo: "Norma ISO/IEC 27001:2022",
      descripcion: "Estándar internacional para la gestión de la seguridad de la información",
      url: "https://www.iso.org/es/norma/27001",
      tipo: "Norma Internacional",
    },
    {
      titulo: "PO-GI-08 Política General de la Seguridad de la Información",
      descripcion: "Documento oficial de Refácil - Versión 03, Fecha: 23/10/2025",
      url: "https://kawak.com.co/superpagos/gst_documental/doc_visualizar.php?v=1564&0.5354119368883534",
      tipo: "Documento Interno",
    },
    {
      titulo: "PO-GI-10 Política para la Gestión de Seguridad de la Información en Proyectos",
      descripcion: "Documento oficial de Refácil - Versión 01",
      url: "https://kawak.com.co/superpagos/gst_documental/doc_visualizar.php?v=1577&0.012698902255511735",
      tipo: "Documento Interno",
    },
    {
      titulo: "PO-GI-06 Política de Administración de Activos de Información",
      descripcion: "Documento oficial de Refácil - Versión 01, Fecha: 10/10/2025",
      url: "https://kawak.com.co/superpagos/gst_documental/doc_visualizar.php?v=1326&0.6417123548957541",
      tipo: "Documento Interno",
    },
    {
      titulo: "PO-GI-02 Política de Administración de Activos de Información",
      descripcion: "Documento oficial de Refácil - Versión 01, Fecha: 10/10/2025",
      url: "https://kawak.com.co/superpagos/gst_documental/doc_visualizar.php?v=1392&0.25454423790331127",
      tipo: "Documento Interno",
    },
    {
      titulo: "Principios Fundamentales de ISO 27001",
      descripcion: "Guía sobre los 8 principios básicos de la norma ISO 27001",
      url: "https://www.sgs.com/es-es/noticias/2023/10/quieres-saber-los-8-principios-basicos-de-la-norma-iso-27001",
      tipo: "Artículo Técnico",
    },
    {
      titulo: "Controles ISO 27001: Cuáles son y qué debes saber",
      descripcion: "Explicación detallada de los controles del Anexo A de ISO 27001",
      url: "https://innevo.com/blog/controles-iso27001",
      tipo: "Artículo Técnico",
    },
    {
      titulo: "Roles y Responsabilidades en ISO 27001",
      descripcion: "Definición de los roles clave para la implementación del SGSI",
      url: "https://innevo.com/blog/roles-y-responsabilidades-iso-27001",
      tipo: "Artículo Técnico",
    },
    {
      titulo: "Ciclo de Vida de Desarrollo Seguro (Secure SDLC)",
      descripcion: "ISO 27001:2022 Anexo A 8.25 - Ciclo de vida de desarrollo seguro",
      url: "https://es.isms.online/iso-27001/annex-a-2022/8-25-secure-development-life-cycle-2022/",
      tipo: "Artículo Técnico",
    },
    {
      titulo: "Riesgos a los que se enfrenta una Fintech en Colombia",
      descripcion: "Análisis de riesgos específicos para empresas Fintech en el contexto colombiano",
      url: "https://www.tusdatos.co/blog/riesgos-a-los-que-se-enfrenta-una-fintech-en-colombia",
      tipo: "Investigación",
    },
    {
      titulo: "Prevención del Fraude Financiero en el Ecosistema Fintech",
      descripcion: "Retos y oportunidades en la prevención de fraude en Fintech",
      url: "https://colombiafintech.co/2025/04/04/prevencion-del-fraude-financiero-en-el-ecosistema-fintech-retos-y-oportunidades-by-colombia-fintech/",
      tipo: "Investigación",
    },
    {
      titulo: "Ciberseguridad en el Sector Financiero Colombiano",
      descripcion: "Colombia enfrenta el reto de fortalecer bancos y fintechs ante amenazas cibernéticas",
      url: "https://www.ventasdeseguridad.com/novedades/ultimas-noticias/21-empresas/25518-crece-el-fraude-digital-en-el-sector-financiero-colombia-enfrenta-el-reto-de-fortalecer-bancos-y-fintechs.html",
      tipo: "Investigación",
    },
    {
      titulo: "Guía de Implementación ISO 27001 - NQA",
      descripcion: "Guía práctica para la implementación de ISO 27001:2022",
      url: "https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf",
      tipo: "Guía Técnica",
    },
    {
      titulo: "Información sobre Refácil (Super Pagos S.A.S.)",
      descripcion: "Sitio oficial de Refácil con información sobre la empresa, misión y visión",
      url: "https://www.refacil.co/",
      tipo: "Sitio Web Corporativo",
    },

  ];

  const tiposRecursos = [
    { tipo: "Documento Interno", color: "bg-blue-100 text-blue-900" },
    { tipo: "Norma Internacional", color: "bg-purple-100 text-purple-900" },
    { tipo: "Artículo Técnico", color: "bg-green-100 text-green-900" },
    { tipo: "Investigación", color: "bg-orange-100 text-orange-900" },
    { tipo: "Guía Técnica", color: "bg-cyan-100 text-cyan-900" },
    { tipo: "Sitio Web Corporativo", color: "bg-red-100 text-red-900" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Recursos y Bibliografía</h1>
          <p className="text-lg text-indigo-100">
            Documentos, normas y referencias consultadas para la preparación de la auditoría
          </p>
        </div>
      </section>

      {/* Introducción */}
      <Section title="Recursos Consultados" className="bg-gray-50">
        <ContentCard
          title="Fuentes de Información"
          icon={<BookOpen className="w-6 h-6 text-indigo-600" />}
        >
          <p className="text-gray-700 mb-4">
            Esta sección recopila todos los documentos, normas, artículos técnicos e investigaciones consultadas para el desarrollo de este portal de preparación para la auditoría interna ISO 27001 de Refácil.
          </p>
          <p className="text-gray-700">
            Los recursos incluyen la norma ISO/IEC 27001:2022, las políticas internas de Refácil (PO-GI-08, PO-GI-10, PO-GI-06), artículos técnicos sobre seguridad de la información, investigaciones sobre riesgos en el sector Fintech colombiano, y información corporativa de Refácil.
          </p>
        </ContentCard>
      </Section>

      {/* Leyenda de Tipos */}
      <Section title="Clasificación de Recursos">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tiposRecursos.map((item) => (
            <div
              key={item.tipo}
              className={`${item.color} rounded-lg px-4 py-3 text-center font-semibold text-sm`}
            >
              {item.tipo}
            </div>
          ))}
        </div>
      </Section>

      {/* Lista de Recursos */}
      <Section title="Bibliografía Completa">
        <div className="space-y-4">
          {recursos.map((recurso, index) => (
            <ContentCard
              key={index}
              title={recurso.titulo}
              icon={<FileText className="w-6 h-6 text-indigo-600" />}
            >
              <div className="space-y-3">
                <p className="text-gray-700">{recurso.descripcion}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      recurso.tipo === "Documento Interno"
                        ? "bg-blue-100 text-blue-900"
                        : recurso.tipo === "Norma Internacional"
                        ? "bg-purple-100 text-purple-900"
                        : recurso.tipo === "Artículo Técnico"
                        ? "bg-green-100 text-green-900"
                        : recurso.tipo === "Investigación"
                        ? "bg-orange-100 text-orange-900"
                        : recurso.tipo === "Guía Técnica"
                        ? "bg-cyan-100 text-cyan-900"
                        : "bg-red-100 text-red-900"
                    }`}
                  >
                    {recurso.tipo}
                  </span>

                  {recurso.url !== "#" && (
                    <a
                      href={recurso.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
                    >
                      Acceder
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </ContentCard>
          ))}
        </div>
      </Section>

      {/* Notas Importantes */}
      <Section title="Notas Importantes" className="bg-gray-50">
        <ContentCard title="Información Relevante">
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Documentos Internos:</strong> Las Políticas de Refácil están disponibles en el repositorio documental KAWAK, son de acceso libre para todos los colaboradores de Refácil y se requiere su lectura y aceptación.
            </p>
            <p>
              <strong>Norma ISO 27001:2022:</strong> La norma es el estandar elegido por Refácil para la implementación se su SGSI. La información presentada en este portal es un resumen de los requisitos principales.
            </p>
          </div>
        </ContentCard>
      </Section>

      <Footer />
    </div>
  );
}
