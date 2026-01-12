import jsPDF from 'jspdf'
import { MESES, DIAS_SEMANA } from './feriados.js'

export function generarPDF(mes, año, dias, feriadosMes) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter'
  })

  const pageWidth = 216
  const pageHeight = 279
  const margin = 15
  const contentWidth = pageWidth - 2 * margin

  // Organizar días en semanas completas
  const semanas = organizarDiasEnSemanas(dias, mes, año)

  // Página 1: Todas las semanas - Lunes a Miércoles
  drawMesPage(doc, mes, año, semanas, feriadosMes, 'Izquierda', margin, contentWidth, pageWidth, pageHeight)

  // Página 2: Todas las semanas - Jueves a Domingo
  doc.addPage()
  drawMesPage(doc, mes, año, semanas, feriadosMes, 'Derecha', margin, contentWidth, pageWidth, pageHeight)

  // Página final con lista de feriados
  doc.addPage()
  drawHolidaysPage(doc, mes, año, feriadosMes, margin, contentWidth, pageWidth, pageHeight)

  doc.save(`calendario-${MESES[mes].toLowerCase()}-${año}.pdf`)
}

function organizarDiasEnSemanas(dias, mes, año) {
  const semanas = []
  const primerDiaMes = new Date(año, mes, 1)
  const diaSemanaInicio = primerDiaMes.getDay() // 0 = Domingo, 1 = Lunes, etc.

  // Convertir a formato Lunes=0, Domingo=6
  const diaInicio = diaSemanaInicio === 0 ? 6 : diaSemanaInicio - 1

  // Crear array con días vacíos al inicio si es necesario
  const calendarioCompleto = []
  for (let i = 0; i < diaInicio; i++) {
    calendarioCompleto.push(null) // Día vacío
  }
  calendarioCompleto.push(...dias)

  // Organizar en semanas de 7 días
  for (let i = 0; i < calendarioCompleto.length; i += 7) {
    const semana = calendarioCompleto.slice(i, i + 7)
    // Solo agregar semanas que tengan al menos un día del mes
    if (semana.some(dia => dia !== null)) {
      semanas.push(semana)
    }
  }

  return semanas
}

function drawMesPage(doc, mes, año, semanas, feriados, lado, margin, contentWidth, pageWidth, pageHeight) {
  // Resetear configuración antes de dibujar
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 0, 0)

  // Título
  doc.setFontSize(30)
  doc.setTextColor(0, 57, 166)
  doc.text(`${MESES[mes]} ${año}`, pageWidth / 2, 25, { align: 'center' })

  // Dibujar todas las semanas del mes
  drawAllWeeks(doc, mes, año, semanas, feriados, margin, 35, contentWidth, lado)
}

function drawAllWeeks(doc, mes, año, semanas, feriados, x, y, width, lado) {
  // Ajustar qué días mostrar según el lado
  let diasHeaders, numColumnas
  if (lado === 'Izquierda') {
    diasHeaders = DIAS_SEMANA.slice(0, 3) // LUNES, MARTES, MIÉRCOLES
    numColumnas = 3
  } else {
    diasHeaders = DIAS_SEMANA.slice(3, 7) // JUEVES, VIERNES, SÁBADO, DOMINGO
    numColumnas = 4
  }

  const cellWidth = width / numColumnas
  const cellHeight = 45
  const numFilas = semanas.length

  // Dibujar encabezados de días
  doc.setFillColor(0, 57, 166)
  doc.rect(x, y, width, 18, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')

  diasHeaders.forEach((day, i) => {
    doc.text(day, x + cellWidth * i + cellWidth / 2, y + 14, { align: 'center' })
  })

  doc.setTextColor(0, 0, 0)
  doc.setFont('helvetica', 'normal')

  // Dibujar filas para cada semana
  semanas.forEach((semana, semanaIndex) => {
    const semanaY = y + 18 + semanaIndex * cellHeight

    // Número de semana
    doc.setFontSize(8)
    doc.setTextColor(100, 100, 100)
    doc.text(`S${semanaIndex + 1}`, x - 8, semanaY + cellHeight / 2)

    // Dibujar celdas de días para esta semana
    for (let col = 0; col < numColumnas; col++) {
      const diaIndex = lado === 'Izquierda' ? col : col + 3
      const dia = semana[diaIndex]

      const cellX = x + col * cellWidth
      const cellY = semanaY

    // Bordes
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(0.3)
    doc.rect(cellX, cellY, cellWidth, cellHeight)

      if (dia !== null && dia !== undefined) {
        const feriado = feriados.find(f => f.fecha.getDate() === dia)
        if (feriado) {
          let color
          switch (feriado.tipo) {
            case 'irrenunciable': color = [218, 41, 28]; break
            case 'religioso': color = [128, 0, 128]; break
            case 'civil': color = [0, 57, 166]; break
            case 'regional': color = [0, 128, 0]; break
            default: color = [200, 200, 200]
          }
          doc.setFillColor(...color)
          doc.rect(cellX, cellY, cellWidth, cellHeight, 'F')
          doc.setTextColor(255, 255, 255)
        } else {
          doc.setTextColor(0, 0, 0)
        }

        // Número del día
        doc.setFontSize(46)
        doc.setFont('helvetica', 'bold')
        doc.text(dia.toString(), cellX + cellWidth / 2, cellY + 30, { align: 'center' })

        // Nombre del feriado si existe (más pequeño para caber)
        if (feriado) {
          doc.setFontSize(9)
          doc.setFont('helvetica', 'normal')
          const nombreCorto = feriado.nombre.substring(0, 9) + (feriado.nombre.length > 9 ? '...' : '')
          doc.text(nombreCorto, cellX + cellWidth / 2, cellY + 44, { align: 'center' })
        }
      }
    }
  })
}

function drawHolidaysPage(doc, mes, año, feriados, margin, contentWidth, pageWidth, pageHeight) {
  // Título
  doc.setFontSize(36)
  doc.setTextColor(0, 57, 166)
  doc.text(`Feriados - ${MESES[mes]} ${año}`, pageWidth / 2, 30, { align: 'center' })

  // Lista de feriados
  drawHolidaysList(doc, feriados, margin, 40, contentWidth)

  // Espacio para notas
  drawNotesBox(doc, margin, 180, contentWidth)
}

function drawHolidaysList(doc, feriados, x, y, width) {
  let yPos = y
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(0, 57, 166)
  doc.text('Lista Completa de Feriados', x, yPos)

  yPos += 20
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)

  feriados.forEach((feriado, i) => {
    if (yPos > 250) return

    const dia = feriado.fecha.getDate()
    const mesNombre = MESES[feriado.fecha.getMonth()]
    const tipoText = feriado.tipo.charAt(0).toUpperCase() + feriado.tipo.slice(1)

    // Fondo para cada feriado
    doc.setFillColor(250, 250, 250)
    doc.rect(x, yPos - 3, width, 12, 'F')

    // Borde
    doc.setDrawColor(220, 220, 220)
    doc.setLineWidth(0.3)
    doc.rect(x, yPos - 3, width, 12)

    let color
    switch (feriado.tipo) {
      case 'irrenunciable': color = [218, 41, 28]; break
      case 'religioso': color = [128, 0, 128]; break
      case 'civil': color = [0, 57, 166]; break
      case 'regional': color = [0, 128, 0]; break
      default: color = [0, 0, 0]
    }

    // Fecha
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(`${dia} ${mesNombre}`, x + 5, yPos + 2)

    // Nombre del feriado
    doc.setFont('helvetica', 'normal')
    doc.text(feriado.nombre, x + 40, yPos + 2)

    // Tipo
    doc.setTextColor(...color)
    doc.text(`(${tipoText})`, x + width - 30, yPos + 2)

    // Puente
    if (feriado.esPuente) {
      doc.setTextColor(255, 140, 0)
      doc.text('🌉 Puente', x + width - 60, yPos + 2)
    }

    yPos += 15
  })
}

function drawNotesBox(doc, x, y, width) {
  const height = 25

  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.5)
  doc.rect(x, y, width, height)

  doc.setFontSize(9)
  doc.setFont('helvetica', 'italic')
  doc.setTextColor(150, 150, 150)
  doc.text('Notas:', x + 3, y + 5)

  doc.setDrawColor(220, 220, 220)
  for (let i = 0; i < 3; i++) {
    const lineY = y + 10 + i * 5
    doc.line(x + 3, lineY, x + width - 3, lineY)
  }
}