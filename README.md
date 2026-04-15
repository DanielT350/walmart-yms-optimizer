#  Walmart YMS Optimizer - Nodo Cuautitlán

##  Resumen Ejecutivo
**Descripción:** Sistema inteligente para la gestión de flujo de transporte en el patio de maniobras del CEDIS Cuautitlán.  
**Problema:** La asignación manual de rampas genera retrasos en mercancía perecedera y tiempos de espera inconsistentes.  
**Solución:** Algoritmo de priorización basado en tipo de carga (Perecederos > Secos) y tiempo de arribo (FIFO).  
**Arquitectura:** Microservicios en Node.js, validación CI/CD con GitHub Actions y control de versiones mediante GitFlow.

---
graph TD
    A[YMS Walmart API] -->|Datos de Unidades| B(Módulo de Ingesta)
    B --> C{Motor de Lógica}
    C -->|Prioridad 1| D[Perecederos]
    C -->|Prioridad 2| E[Carga Seca]
    D --> F[Algoritmo de Asignación FIFO]
    E --> F
    F --> G[Dashboard de Supervisión]
    F -->|Update| H[(Base de Datos PostgreSQL)]

##  Tabla de Contenidos
1. [Requerimientos](#requerimientos)
2. [Instalación](#instalación)
3. [Configuración](#configuración)
4. [Uso](#uso)
5. [Contribución](#contribución)
6. [Roadmap](#roadmap)

---

##  Requerimientos
- **Servidor de Aplicación:** Node.js v18.x o superior.
- **Entorno:** Linux/Windows/MacOS.
- **Base de Datos:** PostgreSQL (Planeado para versión GA).
- **Paquetes Adicionales:** `npm` (Node Package Manager).
- **CI/CD:** GitHub Actions activado.

---

##  Instalación

### Ambiente de Desarrollo
1. Descarga e instala [Node.js](https://nodejs.org).
2. Clona este repositorio:
   ```bash
   git clone https://github.com
