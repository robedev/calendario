export default function HolidaysList({ feriados }) {
  const getStyles = (tipo) => {
    switch (tipo) {
      case 'irrenunciable':
        return {
          container: 'bg-red-50 border-l-4 border-chile-red hover:bg-red-100',
          date: 'text-chile-red',
          title: 'text-gray-900',
          type: 'text-red-600'
        }
      case 'religioso':
        return {
          container: 'bg-purple-50 border-l-4 border-purple-500 hover:bg-purple-100',
          date: 'text-purple-600',
          title: 'text-gray-900',
          type: 'text-purple-600'
        }
      case 'civil':
        return {
          container: 'bg-blue-50 border-l-4 border-chile-blue hover:bg-blue-100',
          date: 'text-chile-blue',
          title: 'text-gray-900',
          type: 'text-blue-600'
        }
      case 'regional':
        return {
          container: 'bg-green-50 border-l-4 border-green-500 hover:bg-green-100',
          date: 'text-green-600',
          title: 'text-gray-900',
          type: 'text-green-600'
        }
      default:
        return {
          container: 'bg-gray-50 border-l-4 border-gray-400 hover:bg-gray-100',
          date: 'text-gray-600',
          title: 'text-gray-900',
          type: 'text-gray-500'
        }
    }
  }

  if (feriados.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full mb-6 flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="font-bold text-xl mb-2 text-gray-800">Sin Feriados</h3>
        <p className="text-gray-500 max-w-xs mx-auto">Este mes no tiene días feriados registrados.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-2xl text-gray-800">
          Feriados
        </h3>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider">
          {feriados.length} Total
        </span>
      </div>

      <div className="space-y-4">
        {feriados.map((feriado, index) => {
          const styles = getStyles(feriado.tipo)
          
          return (
            <div
              key={index}
              className={`
                ${styles.container}
                p-4 rounded-xl transition-all duration-200
                group hover:shadow-md
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`flex flex-col items-center justify-center min-w-[3.5rem] p-2 rounded-lg bg-white/50 backdrop-blur-sm ${styles.date}`}>
                  <span className="text-2xl font-bold leading-none">
                    {feriado.fecha.toLocaleDateString('es-CL', { day: '2-digit' })}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wide opacity-80 mt-1">
                    {feriado.fecha.toLocaleDateString('es-CL', { month: 'short' }).replace('.', '')}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0 py-0.5">
                  <h4 className={`font-bold text-lg leading-tight truncate pr-2 ${styles.title}`}>
                    {feriado.nombre}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs font-semibold uppercase tracking-wide ${styles.type}`}>
                      {feriado.tipo}
                    </span>
                    {feriado.esPuente && (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Puente
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}