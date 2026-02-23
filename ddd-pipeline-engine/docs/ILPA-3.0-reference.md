# ILPA 3.0 Reference

Referencia del estándar ILPA (Institutional Limited Partners Association) Reporting Template versión 3.0.

## Qué es ILPA

ILPA es la asociación global de limited partners (LPs) en private equity. Su Reporting Template estandariza la información que los general partners (GPs) deben reportar a sus LPs.

## ILPA 3.0 — Alcance

La versión 3.0 del template cubre:

### 1. Fund-Level Information

- Datos generales del fondo (nombre, vintage, tamaño, estrategia)
- Términos del fondo (management fee, carried interest, hurdle rate)
- Información del GP y key persons

### 2. Capital Account Statement

- Compromisos de capital por LP
- Contribuciones (capital calls)
- Distribuciones (proceeds)
- NAV por LP
- Ratios: DPI, RVPI, TVPI

### 3. Portfolio Company Data

- Lista de inversiones activas
- Datos por compañía: sector, geografía, fecha de inversión, costo, fair value
- Métricas operativas (revenue, EBITDA) cuando están disponibles

### 4. Fee and Expense Reporting

- Management fees cobrados
- Organizational expenses
- Fund expenses
- Fee offsets y waivers
- Carried interest acumulado y distribuido

### 5. ESG Reporting (nuevo en 3.0)

- Métricas ESG a nivel fondo
- Métricas ESG a nivel portfolio company
- Alineación con frameworks (SFDR, TCFD, PRI)

## Relevancia para el pipeline

El pipeline usa ILPA 3.0 como estándar de validación cuando el dominio es un asset manager o plataforma de deuda. Los auditors verifican que:

1. Los schemas de datos cubren todos los campos obligatorios de ILPA 3.0.
2. Los bounded contexts modelan correctamente las entidades ILPA (Fund, LP, Capital Account, Portfolio Company).
3. Los domain events capturan los flujos ILPA (capital call, distribution, NAV calculation).
4. Los contratos de API exponen endpoints compatibles con el reporting template.

## Fuentes

- ILPA Reporting Template 3.0: [ilpa.org](https://ilpa.org)
- ILPA Reporting Best Practices
- ILPA Principles 3.0
