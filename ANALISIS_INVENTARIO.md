## Análisis de inventario: mínimos (ROP), stock de seguridad, Max y quiebres

Este repositorio incluye un script de Python para calcular, por SKU:

- Nivel de demanda diaria (media y desviación)
- Stock de seguridad (Safety Stock) según nivel de servicio
- Punto de reorden (ROP / mínimo sugerido)
- Máximo sugerido (política Min/Max)
- Días y eventos con inventario en cero (stockouts) y ventas perdidas estimadas

Archivos añadidos:

- `src/pages/inventory_analysis.py`: script principal del análisis
- `config/inventory_analysis.yaml`: configuración (nivel de servicio, lead times, etc.)
- `data/sales_sample.csv` y `data/inventory_sample.csv`: ejemplos de formato
- `analytics_requirements.txt`: dependencias de Python

### 1) Requisitos

- Python 3.10+ instalado (Windows: `py --version`)

Instalar dependencias (recomendado usar entorno virtual):

```powershell
py -m venv .venv
./.venv/Scripts/Activate.ps1
pip install -r analytics_requirements.txt
```

### 2) Preparar tus datos

Ventas (CSV): columnas mínimas `date,item_code,qty`

```csv
date,item_code,qty
2025-01-01,SKU-001,3
2025-01-01,SKU-002,1
2025-01-02,SKU-001,2
```

Inventario (CSV): snapshots por fecha `date,item_code,on_hand`

```csv
date,item_code,on_hand
2025-01-01,SKU-001,25
2025-01-03,SKU-001,18
2025-01-05,SKU-001,4
```

Notas:

- La columna `date` debe ser parseable (YYYY-MM-DD).
- El script agregará ventas por día y hará forward-fill del inventario.
- Recomendado: al menos 90 días de historial (configurable).

### 3) Configuración

Edita `config/inventory_analysis.yaml`:

```yaml
service_level: 0.95            # 95% de nivel de servicio (calcula Z)
default_lead_time_days: 7      # lead time global si no hay por SKU
review_period_days: 7          # período de revisión para Max
min_history_days: 90           # historial mínimo por SKU
sku_lead_times:
  # "SKU-001": 10
```

### 4) Ejecutar el análisis

```powershell
python src/pages/inventory_analysis.py `
  --sales data/sales_sample.csv `
  --inventory data/inventory_sample.csv `
  --config config/inventory_analysis.yaml `
  --out out
```

Salidas en `out/`:

- `inventory_policy_metrics.csv`: métricas por SKU (Min/ROP, Max, SS, stockouts)
- `inventory_policy_metrics.json`: lo mismo en JSON
- `summary.json`: resumen ejecutivo

### 5) Interpretación rápida

- `mean_daily_demand` y `std_daily_demand`: demanda media y volatilidad.
- `safety_stock`: buffer para cumplir el nivel de servicio dado el lead time.
- `reorder_point` (≈ Mínimo sugerido): pedir cuando el inventario baje de este valor.
- `recommended_max`: objetivo de llenado (Min/Max simple).
- `stockout_days` y `stockout_events`: días y eventos con inventario en 0.
- `estimated_lost_sales`: ventas estimadas durante días con inventario en 0.

### 6) Siguientes mejoras (opcionales)

- Modelos intermitentes (Croston/SBA) para SKUs con baja rotación.
- Descomposición estacional o EWMA para demanda no estacionaria.
- Lead time variable por proveedor y calendario.
- Simulación de servicio-fill rate / backorders.

Si necesitas conectar datos reales desde SAP B1 o PostgreSQL, comparte los extractos y adaptamos los lectores de datos (`read_sales_csv`, `read_inventory_csv`).


