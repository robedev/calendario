import { MESES, DIAS_SEMANA } from '../utils/feriados.js'

export default function Calendar({ mes, año, feriados }) {
  const hoy = new Date()

  const getFeriadoStyles = (tipo) => {
    switch (tipo) {
      case 'irrenunciable':
        return {
          container: 'bg-red-50 border-l-4 border-chile-red hover:bg-red-100',
          badge: 'bg-chile-red text-white',
          text: 'text-chile-red'
        }
      case 'religioso':
        return {
          container: 'bg-purple-50 border-l-4 border-purple-500 hover:bg-purple-100',
          badge: 'bg-purple-500 text-white',
          text: 'text-purple-700'
        }
      case 'civil':
        return {
          container: 'bg-blue-50 border-l-4 border-chile-blue hover:bg-blue-100',
          badge: 'bg-chile-blue text-white',
          text: 'text-chile-blue'
        }
      case 'regional':
        return {
          container: 'bg-green-50 border-l-4 border-green-500 hover:bg-green-100',
          badge: 'bg-green-500 text-white',
          text: 'text-green-700'
        }
      default:
        return {
          container: 'bg-white hover:bg-gray-50 border border-gray-100',
          badge: 'bg-gray-200 text-gray-700',
          text: 'text-gray-700'
        }
    }
  }

  const isToday = (dia) => {
    return hoy.getDate() === dia && hoy.getMonth() === mes && hoy.getFullYear() === año
  }

  const getFeriado = (dia) => {
    return feriados.find(f => f.fecha.getDate() === dia)
  }

  const diasEnMes = new Date(año, mes + 1, 0).getDate()
  const primerDia = new Date(año, mes, 1).getDay()
  const inicio = primerDia === 0 ? 6 : primerDia - 1
  const dias = Array.from({ length: diasEnMes }, (_, i) => i + 1)

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            {MESES[mes]} <span className="text-chile-blue">{año}</span>
          </h2>
          <p className="text-gray-400 font-medium mt-1 uppercase tracking-wider text-sm">
            Calendario de Feriados
          </p>
        </div>
        
        <div className="flex gap-3 text-xs font-medium overflow-x-auto pb-2 w-full md:w-auto">
           <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 whitespace-nowrap">
             <div className="w-2 h-2 rounded-full bg-chile-red"></div> Irrenunciable
           </div>
           <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 whitespace-nowrap">
             <div className="w-2 h-2 rounded-full bg-purple-500"></div> Religioso
           </div>
           <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 whitespace-nowrap">
             <div className="w-2 h-2 rounded-full bg-chile-blue"></div> Civil
           </div>
        </div>
      </div>

      {/* Grid Header */}
      <div className="grid grid-cols-7 mb-4 w-full">
        {DIAS_SEMANA.map((dia, i) => (
          <div key={i} className="text-center">
            <span className={`text-xs font-bold tracking-wider uppercase ${i >= 5 ? 'text-chile-red/80' : 'text-gray-400'}`}>
              <span className="md:hidden">{dia.substring(0, 3)}</span>
              <span className="hidden md:inline">{dia}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Grid Body */}
      <div className="grid grid-cols-7 gap-2 md:gap-3 lg:gap-4 w-full">
        {/* Empty cells for start of month */}
        {Array.from({ length: inicio }).map((_, i) => (
          <div key={`empty-${i}`} className="bg-gray-50/50 rounded-2xl border border-dashed border-gray-100 min-h-[80px] md:min-h-[120px]"></div>
        ))}

        {/* Days */}
        {dias.map(dia => {
          const feriado = getFeriado(dia)
          const styles = feriado ? getFeriadoStyles(feriado.tipo) : getFeriadoStyles('default')
          const todayStyles = isToday(dia) 
            ? 'ring-4 ring-yellow-300 ring-offset-2 z-10' 
            : ''

          return (
            <div
              key={dia}
              className={`
                relative flex flex-col justify-between
                p-2 md:p-3 rounded-2xl transition-all duration-200
                min-h-[80px] md:min-h-[120px]
                ${styles.container}
                ${todayStyles}
                group hover:shadow-lg
              `}
            >
              <div className="flex justify-between items-start">
                <span className={`
                  text-lg md:text-2xl font-bold leading-none
                  ${feriado ? styles.text : 'text-gray-700'}
                  ${isToday(dia) ? 'text-blue-600' : ''}
                `}>
                  {dia}
                </span>
                
                {feriado?.esPuente && (
                  <span title="Feriado Puente" className="text-lg">🌉</span>
                )}
              </div>

              {feriado && (
                <div className="mt-1 md:mt-2">
                  <span className={`
                    inline-block px-2 py-1 rounded-md text-[10px] md:text-xs font-semibold leading-tight
                    ${styles.badge} bg-opacity-90 backdrop-blur-sm
                    w-full truncate text-center
                  `}>
                    {feriado.nombre}
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}