import { useState } from 'react'
import { MESES, DIAS_SEMANA, REGIONES, FERIADOS_FIJOS, FERIADOS_REGIONALES } from '../utils/feriados.js'
import { obtenerFeriadosReligiosos } from '../utils/easter.js'
import { generarPDF } from '../utils/pdf.js'
import { format } from 'date-fns'

export default function Header({ mes, año, setMes, setAño, region, setRegion, feriadosMes }) {
  const hoy = new Date()

  const goToToday = () => {
    setMes(hoy.getMonth())
    setAño(hoy.getFullYear())
  }

  const previousMonth = () => {
    if (mes === 0) {
      setMes(11)
      setAño(año - 1)
    } else {
      setMes(mes - 1)
    }
  }

  const nextMonth = () => {
    if (mes === 11) {
      setMes(0)
      setAño(año + 1)
    } else {
      setMes(mes + 1)
    }
  }

  const handleDownloadPDF = () => {
    const diasEnMes = new Date(año, mes + 1, 0).getDate()
    const dias = Array.from({ length: diasEnMes }, (_, i) => i + 1)
    generarPDF(mes, año, dias, feriadosMes)
  }

  return (
    <div className="bg-gradient-to-r from-chile-blue via-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-2xl mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Calendario Chile
          </h1>
          <p className="text-blue-100 text-lg">Feriados Nacionales y Regionales</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={goToToday}
            className="px-6 py-3 bg-gradient-to-r from-chile-red to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Hoy
          </button>
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            PDF
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-2">
          <button
            onClick={previousMonth}
            className="p-3 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
            title="Mes anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <select
              value={mes}
              onChange={(e) => setMes(parseInt(e.target.value))}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg font-bold text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {MESES.map((m, i) => (
                <option key={i} value={i} className="text-gray-800">{m}</option>
              ))}
            </select>

            <input
              type="number"
              value={año}
              onChange={(e) => setAño(parseInt(e.target.value))}
              min="1900"
              max="2100"
              className="w-24 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg font-bold text-white text-center focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <button
            onClick={nextMonth}
            className="p-3 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
            title="Mes siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
          <span className="text-sm font-semibold text-blue-100">Región:</span>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <option value="" className="text-gray-800">Nacional</option>
            {REGIONES.map((r) => (
              <option key={r.codigo} value={r.codigo} className="text-gray-800">{r.nombre}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}