import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import { Shield, Users, FileText, AlertTriangle, CheckCircle, BookOpen } from "lucide-react";

export default function Home() {
  const navigationCards = [
    {
      title: "Principios de ISO 27001",
      description: "Confidencialidad, Integridad y Disponibilidad",
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      href: "/principios",
    },
    {
      title: "Roles y Responsabilidades",
      description: "Responsabilidades específicas en TI",
      icon: <Users className="w-8 h-8 text-cyan-600" />,
      href: "/roles",
    },
    {
      title: "Resumen de Políticas",
      description: "Aspectos claves de las principales Políticas del SGSI",
      icon: <FileText className="w-8 h-8 text-cyan-600" />,
      href: "/politicas",
    },
    {
      title: "Riesgos de Seguridad",
      description: "Riesgos críticos para Fintech",
      icon: <AlertTriangle className="w-8 h-8 text-cyan-600" />,
      href: "/riesgos",
    },
    {
      title: "Generalidades Auditoría",
      description: "Información para la auditoría interna",
      icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
      href: "/auditoria",
    },
    {
      title: "Recursos",
      description: "Documentos y referencias",
      icon: <BookOpen className="w-8 h-8 text-cyan-600" />,
      href: "/recursos",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Preparación para la Auditoría Interna ISO 27001
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Refácil - Seguridad de la Información en TI
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Bienvenido al portal de preparación para la auditoría interna de ISO 27001. Aquí encontrarás toda la información necesaria para entender los principios de la norma, tus responsabilidades específicas en seguridad de la información, y los riesgos que debemos mitigar como empresa Fintech.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <Section title="Misión y Visión de Refácil" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContentCard title="Misión" variant="highlight">
            <p className="text-gray-700">
              Somos Refácil, una SuperApp que facilita a comercios y personas inclusión digital y financiera, generando impacto social y desarrollo económico por medio de tecnología, innovación y seguridad.
            </p>
          </ContentCard>
          <ContentCard title="Visión" variant="highlight">
            <p className="text-gray-700">
              En el año 2030, Refácil se consolidará como una de las empresas líderes dentro del ecosistema digital en Colombia, destacándose especialmente en los segmentos B2B y E2E. En este período, aspiramos gestionar más de 32 millones de transacciones mensuales.
            </p>
          </ContentCard>
        </div>
      </Section>

      {/* Valores Corporativos */}
      <Section title="Valores Corporativos">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Confianza", "Seguridad", "Innovación", "Tecnología", "Agilidad", "Comunicación"].map(
            (valor) => (
              <div
                key={valor}
                className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 text-center font-semibold text-gray-900 hover:bg-cyan-100 transition-colors"
              >
                {valor}
              </div>
            )
          )}
        </div>
      </Section>

      {/* Navegación Rápida */}
      <Section title="Navegación Rápida" subtitle="Accede a los temas principales de la auditoría">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <a className="block h-full">
                <ContentCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  variant="default"
                >
                  <Button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700">
                    Ir al Tema
                  </Button>
                </ContentCard>
              </a>
            </Link>
          ))}
        </div>
      </Section>

      {/* Información Importante */}
      <Section title="Información Importante" className="bg-red-50">
        <ContentCard
          title="⚠️ Reporte de Incidentes"
          variant="warning"
        >
          <p className="text-gray-700 mb-4">
            Ante cualquier incidente o sospecha de incidente de seguridad de la información, se debe reportar inmediatamente al correo:
          </p>
          <a
            href="mailto:incidentes.seguridad@refacil.com"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            incidentes.seguridad@refacil.com
          </a>
        </ContentCard>
      </Section>

      <Footer />
    </div>
  );
}
