import { INCIDENT_EMAIL, COMPANY_NAME, COMPANY_LOCATION, COMPANY_NIT } from "@/const";
import { Mail, MapPin, AlertCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información de la Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
            <p className="text-sm mb-2">{COMPANY_NAME}</p>
            <p className="text-sm text-gray-400 mb-4">NIT: {COMPANY_NIT}</p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>{COMPANY_LOCATION}</span>
            </div>
          </div>

          {/* Reporte de Incidentes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <AlertCircle size={20} className="text-red-400" />
              Reporte de Incidentes
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Ante cualquier incidente o sospecha de incidente de seguridad de la información:
            </p>
            <a
              href={`mailto:${INCIDENT_EMAIL}`}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <Mail size={16} />
              {INCIDENT_EMAIL}
            </a>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/principios" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Principios ISO 27001
                </a>
              </li>
              <li>
                <a href="/politicas" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Políticas de Seguridad
                </a>
              </li>
              <li>
                <a href="/auditoria" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Generalidades Auditoría
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Refácil (Super Pagos S.A.S.). Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Gestión Integral-Sistema de Gestión de Seguridad de la Información (SGSI) - ISO/IEC 27001:2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
