export const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

export const DIAS_SEMANA = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO']

export const REGIONES = [
  { codigo: 'TA', nombre: 'Tarapacá' },
  { codigo: 'AN', nombre: 'Antofagasta' },
  { codigo: 'AT', nombre: 'Atacama' },
  { codigo: 'CO', nombre: 'Coquimbo' },
  { codigo: 'VS', nombre: 'Valparaíso' },
  { codigo: 'RM', nombre: 'Metropolitana' },
  { codigo: "OH", nombre: "O'Higgins" },
  { codigo: 'ML', nombre: 'Maule' },
  { codigo: 'NB', nombre: 'Ñuble' },
  { codigo: 'BI', nombre: 'Biobío' },
  { codigo: 'AR', nombre: 'Araucanía' },
  { codigo: 'LR', nombre: 'Los Ríos' },
  { codigo: 'LL', nombre: 'Los Lagos' },
  { codigo: 'AI', nombre: 'Aysén' },
  { codigo: 'MA', nombre: 'Magallanes' }
]

export const FERIADOS_FIJOS = [
  { mes: 1, dia: 1, nombre: 'Año Nuevo', tipo: 'irrenunciable' },
  { mes: 5, dia: 1, nombre: 'Día del Trabajo', tipo: 'irrenunciable' },
  { mes: 5, dia: 21, nombre: 'Día de las Glorias Navales', tipo: 'civil' },
  { mes: 6, dia: 29, nombre: 'San Pedro y San Pablo', tipo: 'religioso' },
  { mes: 7, dia: 16, nombre: 'Virgen del Carmen', tipo: 'religioso' },
  { mes: 8, dia: 15, nombre: 'Asunción de la Virgen', tipo: 'religioso' },
  { mes: 9, dia: 18, nombre: 'Día de la Independencia', tipo: 'irrenunciable' },
  { mes: 9, dia: 19, nombre: 'Día de las Glorias del Ejército', tipo: 'civil' },
  { mes: 10, dia: 12, nombre: 'Día de la Raza', tipo: 'civil' },
  { mes: 11, dia: 1, nombre: 'Día de Todos los Santos', tipo: 'religioso' },
  { mes: 12, dia: 8, nombre: 'Inmaculada Concepción', tipo: 'religioso' },
  { mes: 12, dia: 25, nombre: 'Navidad', tipo: 'irrenunciable' }
]

export const FERIADOS_REGIONALES = {
  'TA': [{ mes: 6, dia: 8, nombre: 'Día de la Región de Tarapacá' }],
  'AN': [{ mes: 7, dia: 8, nombre: 'Combate Naval de Iquique' }],
  'AT': [{ mes: 10, dia: 28, nombre: 'Día de la Región de Atacama' }],
  'CO': [{ mes: 11, dia: 20, nombre: 'Combate Naval de Papudo' }],
  'VS': [{ mes: 9, dia: 5, nombre: 'Día del Combate Naval de Valparaíso' }],
  'RM': [],
  'OH': [{ mes: 10, dia: 6, nombre: 'Día de la Región de O\'Higgins' }],
  'ML': [{ mes: 9, dia: 20, nombre: 'Día de la Región del Maule' }],
  'NB': [{ mes: 8, dia: 15, nombre: 'Día de la Región de Ñuble' }],
  'BI': [{ mes: 8, dia: 5, nombre: 'Combate Naval de Concepción' }],
  'AR': [{ mes: 11, dia: 5, nombre: 'Día de la Región de la Araucanía' }],
  'LR': [{ mes: 2, dia: 6, nombre: 'Día de la Región de Los Ríos' }],
  'LL': [{ mes: 2, dia: 12, nombre: 'Día de la Región de Los Lagos' }],
  'AI': [{ mes: 5, dia: 21, nombre: 'Día de la Región de Aysén' }],
  'MA': [{ mes: 9, dia: 21, nombre: 'Día de la Región de Magallanes' }]
}