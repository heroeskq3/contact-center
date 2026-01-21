# Dashboard Contact Center - Performance Operacional

Dashboard moderno y completo para monitorear el performance de un contact center en tiempo real, con métricas clave para los departamentos de Operaciones y Finanzas.

## 🚀 Características

### Métricas Operacionales
- **Service Level (SLA)**: Porcentaje de llamadas contestadas en tiempo objetivo
- **AHT (Average Handle Time)**: Tiempo promedio de manejo de llamadas
- **FCR (First Call Resolution)**: Resolución en primera llamada
- **NPS (Net Promoter Score)**: Satisfacción del cliente
- **Tasa de Abandono**: Porcentaje de llamadas abandonadas
- **Tiempo en Espera**: Tiempo promedio en cola
- **Adherencia al Horario**: Cumplimiento de horarios de agentes
- **Ocupación**: Porcentaje de tiempo productivo de agentes

### Métricas Financieras
- **Costo por Llamada**: Costo operacional por contacto
- **Ingresos Generados**: Revenue acumulado del día
- **ROI Operacional**: Retorno sobre inversión

### Visualizaciones
- Gráfico de volumen de llamadas por hora
- Service Level histórico
- Distribución por canal (Teléfono, Chat, Email, Social)
- Performance de top 5 agentes
- Adherencia y ocupación por hora
- Tendencias financieras (últimos 7 días)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **Tailwind CSS**: Framework CSS utility-first (via CDN)
- **Chart.js 4.4.0**: Librería de gráficos interactivos
- **Font Awesome 6.4.0**: Iconos modernos
- **Google Fonts (Inter)**: Tipografía profesional
- **JavaScript ES6+**: Lógica moderna y eficiente

## 📊 Data Dummy

El dashboard incluye datos dummy realistas que se actualizan automáticamente cada 30 segundos, simulando un entorno de producción real.

## 🎨 Características del Diseño

- **Responsive**: Optimizado para desktop, tablet y móvil
- **Tiempo Real**: Actualización automática cada 30 segundos
- **Indicadores Visuales**: Badges de color para estado de métricas
- **Gráficos Interactivos**: Hover y zoom en gráficos
- **Tabla Detallada**: Resumen completo de todas las métricas
- **UI Moderna**: Diseño limpio y profesional con gradientes

## 📁 Estructura del Proyecto

```
contact-center/
├── index.html          # Página principal del dashboard
├── app.js             # Lógica JavaScript y data dummy
└── README.md          # Documentación
```

## 🚀 Instalación y Uso

1. Asegúrate de tener un servidor web (Apache/XAMPP está corriendo)
2. Abre tu navegador y accede a:
   ```
   http://localhost/contact-center/
   ```
3. El dashboard se cargará automáticamente con datos dummy

## ⚙️ Configuración

Las métricas se actualizan automáticamente cada 30 segundos. Para cambiar este intervalo, modifica el valor en `app.js`:

```javascript
setInterval(() => {
    // Código de actualización
}, 30000); // Cambia 30000 (30 seg) al intervalo deseado en milisegundos
```

## 📈 Métricas y Targets

| Métrica | Target | Estado |
|---------|--------|--------|
| SLA | ≥ 80% en 20s | Crítico |
| AHT | ≤ 6 minutos | Óptimo |
| FCR | ≥ 75% | Alto |
| NPS | ≥ 50 | Excelente |
| Abandono | ≤ 5% | Bajo |
| Tiempo Espera | ≤ 30 seg | Bajo |
| Adherencia | ≥ 90% | Excelente |
| Ocupación | ≥ 85% | Óptimo |
| Costo/Llamada | ≤ $8.50 | Eficiente |
| ROI | ≥ 25% | Positivo |

## 🎯 Mejores Prácticas Implementadas

1. **Métricas KPI Estándar**: Utiliza métricas reconocidas en la industria de contact centers
2. **Visualización Clara**: Gráficos y tablas fáciles de interpretar
3. **Alertas Visuales**: Badges de color para identificar rápidamente problemas
4. **Datos Financieros**: Integración de métricas que ayudan a la toma de decisiones financieras
5. **Performance**: Carga rápida y actualizaciones eficientes
6. **Responsive Design**: Accesible desde cualquier dispositivo

## 📝 Notas

- Todos los datos son generados automáticamente (dummy data)
- Los gráficos son completamente interactivos
- El diseño es totalmente responsive
- No se requiere base de datos ni backend
- Funciona completamente offline (después de cargar los CDNs)

## 🔄 Próximas Mejoras Sugeridas

- Integración con API real de contact center
- Exportación de reportes en PDF/Excel
- Filtros por fecha y rango de tiempo
- Alertas configurables
- Comparativa día vs día anterior
- Métricas por equipo/supervisor
- Dashboard de agentes individuales

---

**Desarrollado con las mejores prácticas de la industria de Contact Centers**
