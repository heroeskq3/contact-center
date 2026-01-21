// Dashboard Principal
let principalCharts = {};

function initDashboardPrincipal() {
    console.log('=== INICIALIZANDO DASHBOARD PRINCIPAL ===');
    const container = document.getElementById('principalContent');
    if (!container) {
        console.error('❌ Contenedor principalContent no encontrado');
        return;
    }
    console.log('✓ Contenedor encontrado, cargando contenido...');
    
    // Asegurar que el dashboard esté visible
    const dashboard = document.getElementById('dashboard-principal');
    if (dashboard) {
        dashboard.classList.remove('dashboard-hidden');
    }
    
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div class="metric-card clickable" onclick="showMetricDetail('sla', 'Service Level (SLA)')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('sla', 'Service Level (SLA)');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #3b82f6, #2563eb); color: white;">
                    <i class="fas fa-bullseye"></i>
                </div>
                <div class="metric-label">
                    Service Level (SLA)
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>Service Level (SLA)</strong>
                            <p>Porcentaje de llamadas atendidas dentro del tiempo objetivo (típicamente 20 segundos).</p>
                            <div class="formula">SLA = (Llamadas atendidas en ≤20s / Total llamadas) × 100</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="slaValue">0%</div>
                <div class="flex items-center justify-between">
                    <span class="badge badge-success" id="slaBadge">Excelente</span>
                    <div class="metric-change positive" id="slaTrend">
                        <i class="fas fa-arrow-up"></i>
                        <span>+2.3%</span>
                    </div>
                </div>
                <div style="margin-top: 1rem; background: #f1f5f9; height: 6px; border-radius: 6px; overflow: hidden;">
                    <div id="slaBar" style="height: 100%; background: linear-gradient(90deg, #3b82f6, #2563eb); width: 0%; transition: width 0.6s ease;"></div>
                </div>
            </div>
            
            <div class="metric-card clickable" onclick="showMetricDetail('aht', 'AHT Promedio')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('aht', 'AHT Promedio');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="metric-label">
                    AHT Promedio
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>AHT (Average Handle Time)</strong>
                            <p>Tiempo promedio desde que se contesta hasta que se finaliza la llamada, incluyendo tiempo de habla, hold y post-call.</p>
                            <div class="formula">AHT = (Tiempo Habla + Tiempo Hold + Tiempo Post-Call) / Total Llamadas</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="ahtValue">0 min</div>
                <div class="flex items-center justify-between">
                    <span class="badge badge-success" id="ahtBadge">Óptimo</span>
                    <div class="metric-change positive" id="ahtTrend">
                        <i class="fas fa-arrow-down"></i>
                        <span>-2.3%</span>
                    </div>
                </div>
            </div>
            
            <div class="metric-card clickable" onclick="showMetricDetail('fcr', 'FCR (Primera Resolución)')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('fcr', 'FCR (Primera Resolución)');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="metric-label">
                    FCR (Primera Resolución)
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>FCR (First Call Resolution)</strong>
                            <p>Porcentaje de consultas resueltas en el primer contacto, sin necesidad de seguimiento.</p>
                            <div class="formula">FCR = (Consultas resueltas en 1ra llamada / Total consultas) × 100</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="fcrValue">0%</div>
                <div class="flex items-center justify-between">
                    <span class="badge badge-success" id="fcrBadge">Alto</span>
                    <div class="metric-change positive" id="fcrTrend">
                        <i class="fas fa-arrow-up"></i>
                        <span>+1.5%</span>
                    </div>
                </div>
                <div style="margin-top: 1rem; background: #f1f5f9; height: 6px; border-radius: 6px; overflow: hidden;">
                    <div id="fcrBar" style="height: 100%; background: linear-gradient(90deg, #8b5cf6, #7c3aed); width: 0%; transition: width 0.6s ease;"></div>
                </div>
            </div>
            
            <div class="metric-card clickable" onclick="showMetricDetail('nps', 'NPS (Satisfacción)')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('nps', 'NPS (Satisfacción)');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white;">
                    <i class="fas fa-star"></i>
                </div>
                <div class="metric-label">
                    NPS (Satisfacción)
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>NPS (Net Promoter Score)</strong>
                            <p>Mide la lealtad del cliente. Promotores (9-10), Pasivos (7-8), Detractores (0-6).</p>
                            <div class="formula">NPS = % Promotores - % Detractores</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="npsValue">0</div>
                <div class="flex items-center justify-between">
                    <span class="badge badge-warning" id="npsBadge">Bueno</span>
                    <div class="metric-change positive" id="npsTrend">
                        <i class="fas fa-arrow-up"></i>
                        <span>+5.2</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div class="metric-card clickable" onclick="showMetricDetail('abandon', 'Tasa de Abandono')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('abandon', 'Tasa de Abandono');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white;">
                    <i class="fas fa-phone-slash"></i>
                </div>
                <div class="metric-label">
                    Tasa de Abandono
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>Tasa de Abandono</strong>
                            <p>Porcentaje de llamadas que se cuelgan antes de ser atendidas por un agente.</p>
                            <div class="formula">Tasa Abandono = (Llamadas abandonadas / Total llamadas entrantes) × 100</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="abandonValue">0%</div>
                <span class="badge badge-danger" id="abandonBadge">Alto</span>
            </div>
            
            <div class="metric-card clickable" onclick="showMetricDetail('wait', 'Tiempo Espera Promedio')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('wait', 'Tiempo Espera Promedio');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #f97316, #ea580c); color: white;">
                    <i class="fas fa-hourglass-half"></i>
                </div>
                <div class="metric-label">
                    Tiempo Espera Promedio
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>Tiempo de Espera Promedio</strong>
                            <p>Tiempo promedio que los clientes esperan en cola antes de ser atendidos.</p>
                            <div class="formula">Tiempo Espera = Suma de tiempos de espera / Total llamadas atendidas</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="waitValue">0 seg</div>
                <span class="badge badge-warning" id="waitBadge">Moderado</span>
            </div>
            
            <div class="metric-card clickable" onclick="showMetricDetail('agents', 'Agentes Activos')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('agents', 'Agentes Activos');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;">
                    <i class="fas fa-users"></i>
                </div>
                <div class="metric-label">
                    Agentes Activos
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>Agentes Activos</strong>
                            <p>Número total de agentes que están actualmente disponibles o en llamada.</p>
                            <div class="formula">Agentes Activos = Agentes Disponibles + Agentes en Llamada</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="agentsValue">0</div>
                <div style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem;">Total: <span id="agentsTotal">0</span> agentes</div>
            </div>
            
            <div class="metric-card clickable" onclick="showMetricDetail('calls', 'Llamadas por Hora')" style="position: relative;">
                <div class="ai-insight-icon" onclick="event.stopPropagation(); showAIAnalysis('calls', 'Llamadas por Hora');" title="Análisis IA"></div>
                <div class="metric-icon" style="background: linear-gradient(135deg, #14b8a6, #0d9488); color: white;">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="metric-label">
                    Llamadas/Hora
                    <span class="metric-tooltip">
                        <span class="metric-tooltip-icon">?</span>
                        <span class="metric-tooltip-content">
                            <strong>Llamadas por Hora</strong>
                            <p>Volumen promedio de llamadas recibidas por hora en el contact center.</p>
                            <div class="formula">Llamadas/Hora = Total llamadas en período / Horas del período</div>
                        </span>
                    </span>
                </div>
                <div class="metric-value" id="callsValue">0</div>
                <div style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem;">Hoy: <span id="callsToday">0</span> llamadas</div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div class="chart-container chart-clickable" onclick="showMetricDetail('calls', 'Volumen de Llamadas')">
                <div class="chart-title">
                    <i class="fas fa-chart-line" style="color: #3b82f6;"></i>
                    Volumen de Llamadas por Hora
                    <span style="font-size: 0.75rem; color: #64748b; margin-left: 0.5rem;">(Click para detalles)</span>
                </div>
                <div class="chart-canvas-container">
                    <canvas id="principalCallsChart"></canvas>
                </div>
            </div>
            
            <div class="chart-container chart-clickable" onclick="showMetricDetail('sla', 'Service Level (SLA)')">
                <div class="chart-title">
                    <i class="fas fa-chart-area" style="color: #10b981;"></i>
                    Service Level (SLA) Histórico
                    <span style="font-size: 0.75rem; color: #64748b; margin-left: 0.5rem;">(Click para detalles)</span>
                </div>
                <div class="chart-canvas-container">
                    <canvas id="principalSLAChart"></canvas>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="chart-container chart-clickable" onclick="showMetricDetail('channels', 'Distribución por Canal')">
                <div class="chart-title">
                    <i class="fas fa-chart-pie" style="color: #8b5cf6;"></i>
                    Distribución por Canal
                    <span style="font-size: 0.75rem; color: #64748b; margin-left: 0.5rem;">(Click para detalles)</span>
                </div>
                <div class="chart-canvas-container">
                    <canvas id="principalChannelChart"></canvas>
                </div>
            </div>
            
            <div class="chart-container chart-clickable" onclick="showMetricDetail('agents', 'Top Agentes Performance')">
                <div class="chart-title">
                    <i class="fas fa-chart-bar" style="color: #f59e0b;"></i>
                    Top 5 Agentes - Performance
                    <span style="font-size: 0.75rem; color: #64748b; margin-left: 0.5rem;">(Click para detalles)</span>
                </div>
                <div class="chart-canvas-container">
                    <canvas id="principalAgentsChart"></canvas>
                </div>
            </div>
        </div>
    `;
    
    updatePrincipalMetrics();
    initPrincipalCharts();
}

function updatePrincipalMetrics() {
    const data = generatePrincipalData();
    
    // Actualizar valores
    document.getElementById('slaValue').textContent = data.sla.toFixed(1) + '%';
    document.getElementById('ahtValue').textContent = data.aht.toFixed(1) + ' min';
    document.getElementById('fcrValue').textContent = data.fcr.toFixed(1) + '%';
    document.getElementById('npsValue').textContent = data.nps;
    document.getElementById('abandonValue').textContent = data.abandonRate.toFixed(1) + '%';
    document.getElementById('waitValue').textContent = data.waitTime + ' seg';
    document.getElementById('agentsValue').textContent = data.activeAgents;
    document.getElementById('agentsTotal').textContent = data.totalAgents;
    document.getElementById('callsValue').textContent = data.callsPerHour;
    document.getElementById('callsToday').textContent = data.callsToday.toLocaleString();
    
    // Actualizar barras
    document.getElementById('slaBar').style.width = data.sla + '%';
    document.getElementById('fcrBar').style.width = data.fcr + '%';
}

function generatePrincipalData() {
    return {
        sla: Math.random() * 10 + 85,
        aht: Math.random() * 2 + 4.5,
        fcr: Math.random() * 10 + 70,
        nps: Math.floor(Math.random() * 30 + 45),
        abandonRate: Math.random() * 3 + 3,
        waitTime: Math.floor(Math.random() * 20 + 20),
        activeAgents: Math.floor(Math.random() * 5 + 48),
        totalAgents: 52,
        callsPerHour: Math.floor(Math.random() * 50 + 120),
        callsToday: Math.floor(Math.random() * 500 + 2500)
    };
}

function initPrincipalCharts() {
    // Datos dummy
    const hours = [];
    for (let i = 11; i >= 0; i--) {
        const hour = new Date();
        hour.setHours(hour.getHours() - i);
        hours.push(hour.getHours() + ':00');
    }
    
    // Chart: Llamadas
    const callsCtx = document.getElementById('principalCallsChart');
    if (callsCtx && !principalCharts.calls) {
        principalCharts.calls = new Chart(callsCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: hours,
                datasets: [{
                    label: 'Llamadas',
                    data: hours.map(() => Math.floor(Math.random() * 150) + 80),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
    
    // Chart: SLA
    const slaCtx = document.getElementById('principalSLAChart');
    if (slaCtx && !principalCharts.sla) {
        principalCharts.sla = new Chart(slaCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: hours,
                datasets: [{
                    label: 'SLA %',
                    data: hours.map(() => Math.random() * 15 + 80),
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 3
                }, {
                    label: 'Meta (80%)',
                    data: Array(12).fill(80),
                    borderColor: '#ef4444',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: { min: 70, max: 100, grid: { color: '#f1f5f9' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
    
    // Chart: Canales
    const channelCtx = document.getElementById('principalChannelChart');
    if (channelCtx && !principalCharts.channel) {
        principalCharts.channel = new Chart(channelCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Teléfono', 'Chat', 'Email', 'Redes Sociales'],
                datasets: [{
                    data: [65, 20, 10, 5],
                    backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
    
    // Chart: Agentes
    const agentsCtx = document.getElementById('principalAgentsChart');
    if (agentsCtx && !principalCharts.agents) {
        principalCharts.agents = new Chart(agentsCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['María González', 'Carlos Ruiz', 'Ana Martínez', 'Luis Fernández', 'Sofia López'],
                datasets: [{
                    label: 'Llamadas',
                    data: [145, 138, 132, 128, 125],
                    backgroundColor: '#f59e0b',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

// Auto-actualizar cada 30 segundos
setInterval(() => {
    if (currentDashboard === 'principal') {
        updatePrincipalMetrics();
    }
}, 30000);
