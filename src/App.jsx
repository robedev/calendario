import { useState, useMemo } from 'react'
import Header from './components/Header.jsx'
import Calendar from './components/Calendar.jsx'
import HolidaysList from './components/HolidaysList.jsx'
import { FERIADOS_FIJOS, FERIADOS_REGIONALES } from './utils/feriados.js'
import { obtenerFeriadosReligiosos } from './utils/easter.js'

function App() {
  const hoy = new Date()
  const [mes, setMes] = useState(hoy.getMonth())
  const [año, setAño] = useState(hoy.getFullYear())
  const [region, setRegion] = useState('')

  const verificarPuente = (fecha) => {
    const diaSemana = fecha.getDay()
    return diaSemana === 2 || diaSemana === 4
  }

  const feriadosMes = useMemo(() => {
    const feriados = []

    FERIADOS_FIJOS.forEach(f => {
      if (f.mes === mes + 1) {
        const fecha = new Date(año, mes, f.dia)
        feriados.push({
          fecha,
          nombre: f.nombre,
          tipo: f.tipo,
          region: undefined,
          esPuente: verificarPuente(fecha)
        })
      }
    })

    const feriadosReligiosos = obtenerFeriadosReligiosos(año)
    feriadosReligiosos.forEach(f => {
      if (f.fecha.getMonth() === mes) {
        feriados.push({
          fecha: f.fecha,
          nombre: f.nombre,
          tipo: f.tipo,
          region: undefined,
          esPuente: verificarPuente(f.fecha)
        })
      }
    })

    if (region && FERIADOS_REGIONALES[region]) {
      FERIADOS_REGIONALES[region].forEach(f => {
        if (f.mes === mes + 1) {
          const fecha = new Date(año, mes, f.dia)
          feriados.push({
            fecha,
            nombre: f.nombre,
            tipo: 'regional',
            region,
            esPuente: verificarPuente(fecha)
          })
        }
      })
    }

    feriados.sort((a, b) => a.fecha.getDate() - b.fecha.getDate())

    return feriados
  }, [mes, año, region])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header
          mes={mes}
          año={año}
          setMes={setMes}
          setAño={setAño}
          region={region}
          setRegion={setRegion}
          feriadosMes={feriadosMes}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <Calendar mes={mes} año={año} feriados={feriadosMes} />
          </div>
          <div>
            <HolidaysList feriados={feriadosMes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App