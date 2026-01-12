export function calcularSemanaSanta(año) {
  const a = año
  const b = Math.floor(a / 100)
  const c = a % 19
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * c + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((c + 11 * h + 22 * l) / 451)
  const mes = Math.floor((h + l - 7 * m + 114) / 31)
  const dia = ((h + l - 7 * m + 114) % 31) + 1

  return new Date(año, mes - 1, dia)
}

export function obtenerFeriadosReligiosos(año) {
  const domingoPascua = calcularSemanaSanta(año)
  const viernesSanto = new Date(domingoPascua)
  viernesSanto.setDate(domingoPascua.getDate() - 2)
  
  const sabadoSanto = new Date(domingoPascua)
  sabadoSanto.setDate(domingoPascua.getDate() - 1)

  const corpusChristi = new Date(domingoPascua)
  corpusChristi.setDate(domingoPascua.getDate() + 60)

  return [
    { fecha: viernesSanto, nombre: 'Viernes Santo', tipo: 'religioso' },
    { fecha: sabadoSanto, nombre: 'Sábado Santo', tipo: 'religioso' },
    { fecha: corpusChristi, nombre: 'Corpus Christi', tipo: 'religioso' }
  ]
}