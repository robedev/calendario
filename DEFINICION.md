# Calendario Chile - Aplicación Web Moderna

## 📋 Resumen
Aplicación web completa para visualizar y generar calendarios mensuales chilenos, incluyendo todos los feriados nacionales y regionales actualizados, con interfaz moderna y generación de PDF optimizada para impresión.

## 🎯 Características Principales

### 🌐 Interfaz Web Moderna
- **Diseño responsivo** completo (móvil, tablet, desktop)
- **Gradientes y sombras modernas** con colores institucionales chilenos
- **Navegación intuitiva** con botones anterior/siguiente y selector de fecha
- **Indicador visual del día actual** con anillo amarillo
- **Animaciones suaves** y efectos hover
- **Selector de región** para feriados regionales personalizados

### 📅 Calendario Interactivo
- **Formato chileno completo**: Lunes a Domingo, meses en español
- **Días de la semana**: Nombres completos en mayúsculas (LUNES, MARTES, etc.)
- **Vista mensual clásica** con grid de 7 columnas
- **Colores diferenciados** para tipos de feriados:
  - 🔴 **Rojo**: Feriados irrenunciables
  - 🟣 **Morado**: Feriados religiosos
  - 🔵 **Azul**: Feriados civiles
  - 🟢 **Verde**: Feriados regionales

### 🎨 Generación de PDF Profesional
- **Formato optimizado** para impresión (Carta 216mm x 279mm, vertical)
- **Distribución inteligente por semanas**: 2 páginas principales + página de feriados
- **Números grandes y legibles** (69pt) para accesibilidad
- **Mini calendarios** de meses adyacentes en encabezados
- **Encabezados prominentes** (16pt) con nombres completos de días
- **Layout sin superposiciones** ni elementos que se tapen
- **Títulos consistentes** entre páginas

## Feriados Chile

### Feriados Fijos
- 1 de enero: Año Nuevo
- 1 de mayo: Día del Trabajo
- 21 de mayo: Día de las Glorias Navales
- 29 de junio: San Pedro y San Pablo
- 16 de julio: Virgen del Carmen
- 15 de agosto: Asunción de la Virgen
- 18 de septiembre: Día de la Independencia
- 19 de septiembre: Día de las Glorias del Ejército
- 12 de octubre: Día de la Raza
- 1 de noviembre: Día de Todos los Santos
- 8 de diciembre: Inmaculada Concepción
- 25 de diciembre: Navidad

### Feriados Variables
- Viernes Santo y Sábado Santo (calculados según Semana Santa)
- Corpus Christi (60 días después del Domingo de Resurrección)

### Ley de Puente
Cuando un feriado cae en martes o jueves, se convierte en "puente" y se aplica feriado el lunes o viernes correspondiente.

### Feriados Regionales
- Tarapacá: 8 de junio
- Antofagasta: 8 de julio
- Atacama: 28 de octubre
- Coquimbo: 20 de noviembre
- Valparaíso: 5 de septiembre
- Metropolitana: 21 de mayo, 18 de septiembre, 19 de septiembre
- O'Higgins: 6 de octubre
- Maule: 20 de septiembre
- Ñuble: 15 de agosto
- Biobío: 5 de agosto
- Araucanía: 5 de noviembre
- Los Ríos: 6 de febrero
- Los Lagos: 12 de febrero
- Aysén: 21 de mayo
- Magallanes: 21 de septiembre

## 🎨 Interfaz de Usuario Moderna

### Componentes Principales

#### 📋 Header Premium
- **Gradiente azul moderno** con título "Calendario Chile"
- **Controles de navegación** con botones estilizados
- **Selector de fecha** con diseño glassmorphism
- **Botón "Hoy"** con efectos 3D y gradientes
- **Selector de región** integrado

#### 📅 Calendario Visual
- **Título del mes** con gradiente de colores
- **Grid responsive** de 7 columnas
- **Celdas interactivas** con hover effects
- **Nombres de días completos** en mayúsculas
- **Indicador del día actual** con anillo amarillo pulsante

#### 📝 Lista de Feriados
- **Diseño de tarjetas modernas** con gradientes
- **Iconos y badges** para tipos de feriado
- **Fecha destacada** con formato circular
- **Indicador de puente** cuando aplica
- **Efectos hover** con elevación

### 🎨 Estilo Moderno
- **Gradientes avanzados** y efectos glassmorphism
- **Sombras profundas** y efectos de profundidad
- **Animaciones sutiles** (hover, transitions)
- **Paleta chilena moderna**: Azul institucional, rojo nacional
- **Tipografía optimizada** para legibilidad
- **Responsive design** completo

### 🖨️ Generación de PDF Profesional
- **Botón de descarga** con icono y efectos visuales
- **Formato carta optimizado** (216mm × 279mm, vertical)
- **Distribución inteligente por semanas** para fácil impresión
- **3 páginas totales**: 2 de calendario + 1 de feriados detallados
- **Diseño limpio** sin indicadores innecesarios
- **Colores optimizados** para impresión económica
- **Márgenes profesionales** (15mm superior/inferior, 20mm laterales)

## Especificaciones PDF

### Configuración de Página
- Tamaño: Carta (216mm x 279mm)
- Orientación: Vertical
- Márgenes: 15mm (superior/inferior), 20mm (izquierdo/derecho)
- Resolución: 300 DPI para impresión

### Distribución por Semanas (Formato para Unir)

**Formato de Impresión por Semanas:**
El mes completo se divide en 2 páginas principales que se unen lateralmente.

**Página 1:** Todas las semanas del mes - Lunes, Martes, Miércoles
**Página 2:** Todas las semanas del mes - Jueves, Viernes, Sábado, Domingo

**Características:**
- **Vista compacta:** Todas las semanas en una sola vista por lado
- **Indicadores de semana:** Cada fila representa una semana (S1, S2, S3, S4)
- **Diseño limpio:** Sin indicadores de corte para apariencia profesional
- **Página final:** Lista completa de feriados del mes

**Ejemplo de distribución:**
- **Página 1:** Lunes a Miércoles de las 4 semanas
- **Página 2:** Jueves a Domingo de las 4 semanas
- **Página 3:** Lista detallada de todos los feriados

### Estilos de Impresión
- Fondo blanco para impresión económica
- Colores de alta calidad: rojo (#DA291C), azul (#0039A6)
- Tamaño de fuente:
  - 30pt para títulos de mes/año (aumentado 50%)
  - 46pt para números de día
  - 36pt para título de página de feriados (aumentado 50%)
  - 16pt para encabezados de días (nombres completos en mayúsculas, aumentado 100%)
  - 9pt para nombres de feriados
- Días de la semana: LUNES, MARTES, MIÉRCOLES, JUEVES, VIERNES, SÁBADO, DOMINGO
- Líneas guía sutiles para calendario
- Celdas de 45mm de altura para óptima legibilidad
- Altura de encabezado: 18mm para acomodar texto más grande
- Separación clara entre encabezado y celdas para evitar superposiciones de color
- Colores diferentes por tipo de feriado:
  - Irrenunciable: Rojo
  - Religioso: Morado
  - Civil: Azul
  - Regional: Verde
- Día actual: Sin indicador especial (solo en interfaz web)

### Librerías de PDF
- jsPDF (para generación desde JavaScript)
- Lógica personalizada para división por semanas
- Formato optimizado para impresión y corte

### Ejemplo de Generación PDF
```javascript
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'letter'
});

// Organizar días en semanas
const semanas = organizarDiasEnSemanas(diasDelMes, mes, año);

// Página 1: Todas las semanas - Lunes a Miércoles
drawMesPage(doc, mes, año, semanas, feriados, 'Izquierda');

// Página 2: Todas las semanas - Jueves a Domingo
doc.addPage();
drawMesPage(doc, mes, año, semanas, feriados, 'Derecha');

// Página final con lista de feriados
doc.addPage();
drawHolidaysPage(doc, mes, año, feriados);

doc.save('calendario-enero-2026.pdf');
```

## ⚙️ Arquitectura Técnica

### 🎯 Tecnologías Implementadas

#### Frontend
- **Framework**: React 18 con Hooks modernos
- **Build Tool**: Vite para desarrollo rápido
- **Estilos**: Tailwind CSS con configuración personalizada
- **Manejo de Fechas**: date-fns para operaciones avanzadas
- **Generación PDF**: jsPDF con algoritmos personalizados
- **TypeScript**: Soporte completo para desarrollo robusto

#### Lógica de Negocio
- **Cálculo de Feriados**: Algoritmo completo para feriados chilenos
- **Semana Santa**: Implementación del algoritmo Meeus/Jones/Butcher
- **Ley de Puente**: Lógica automática para feriados extendidos
- **Feriados Regionales**: Base de datos completa por región

### 📦 Dependencias Principales
- `react` ^18.2.0 - Framework UI
- `react-dom` ^18.2.0 - Renderizado React
- `date-fns` ^2.30.0 - Utilidades de fecha
- `jspdf` ^2.5.1 - Generación de PDF
- `tailwindcss` ^3.4.0 - Framework CSS

### 🚀 Despliegue
- **Plataformas**: Vercel, Netlify, o hosting estático
- **Build**: `npm run build` genera bundle optimizado
- **Desarrollo**: `npm run dev` con hot reload
- **PWA Ready**: Preparado para instalación como app web

## Estructura de Datos

### Feriado
```typescript
interface Feriado {
  fecha: string; // YYYY-MM-DD
  nombre: string;
  tipo: 'irrenunciable' | 'religioso' | 'civil' | 'regional';
  region?: string; // código de región
  esPuente: boolean;
}
```

## 🔧 Implementación Técnica

### 📊 Algoritmo de Semana Santa
Implementación completa del algoritmo Meeus/Jones/Butcher para cálculo preciso:

```javascript
function calcularSemanaSanta(año) {
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
```

### ✅ Validaciones Implementadas
- **Feriados de Puente**: Detección automática de martes/jueves
- **Fechas Religiosas**: Corrección según calendario litúrgico
- **Filtrado Regional**: Soporte completo para 16 regiones chilenas
- **Año Actual**: Indicador visual del día actual (solo web)
- **Consistencia**: Reset de estado entre páginas PDF

## API Ejemplo

```bash
# Obtener feriados de enero 2026
GET /api/feriados?mes=1&año=2026&region=RM

Response:
{
  "feriados": [
    {
      "fecha": "2026-01-01",
      "nombre": "Año Nuevo",
      "tipo": "irrenunciable",
      "esPuente": false
    }
  ]
}
```

## 🚀 Despliegue y Uso

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
npm run dev
# Accede en http://localhost:3001
```

### Build de Producción
```bash
npm run build
npm run preview
```

### Despliegue en Producción
- **Vercel**: Conecta repositorio Git y despliega automáticamente
- **Netlify**: Arrastra la carpeta `dist` después del build
- **GitHub Pages**: Configura con GitHub Actions

### 📱 Uso de la Aplicación
1. **Navegación**: Usa botones anterior/siguiente o selector de fecha
2. **Regiones**: Selecciona región para ver feriados específicos
3. **PDF**: Haz clic en "PDF" para descargar calendario imprimible
4. **Impresión**: Imprime las 3 páginas y únelas para calendario completo

### 🎯 Características Finales
- ✅ **100% funcional** y probado
- ✅ **Responsive completo** en todos los dispositivos
- ✅ **PDF optimizado** para impresión profesional
- ✅ **Feriados actualizados** hasta 2026+
- ✅ **Código limpio** y bien documentado
- ✅ **Performance optimizada** con Vite