  Walmart YMS Optimizer - Nodo Cuautitlán

##  Resumen Ejecutivo
**Descripción:** Sistema inteligente para la gestión de flujo de transporte en el patio de maniobras del CEDIS Cuautitlán.  
**Problema:** La asignación manual de rampas genera retrasos en mercancía perecedera y tiempos de espera inconsistentes.  
**Solución:** Algoritmo de priorización basado en tipo de carga (Perecederos > Secos) y tiempo de arribo (FIFO).  
**Arquitectura:** Microservicios en Node.js, validación CI/CD con GitHub Actions y control de versiones mediante GitFlow.

---
<img width="1087" height="687" alt="image" src="https://github.com/user-attachments/assets/8fba828a-0cb3-4a08-9ac0-fd73401b3cc8" />

 Tabla de Contenidos
1. [Requerimientos](#requerimientos)
2. [Instalación](#instalación)
3. [Configuración](#configuración)
4. [Uso](#uso)
5. [Contribución](#contribución)
6. [Roadmap](#roadmap)

---

 Requerimientos
- **Servidor de Aplicación:** Node.js v18.x o superior.
- **Entorno:** Linux/Windows/MacOS.
- **Base de Datos:** PostgreSQL (Planeado para versión GA).
- **Paquetes Adicionales:** `npm` (Node Package Manager).
- **CI/CD:** GitHub Actions activado.

---

 Instalación

 Ambiente de Desarrollo
1. Descarga e instala [Node.js](https://nodejs.org).
2. Clona este repositorio:
   ```bash
   git clone https://github.com

Configuración del Ecosistema

El sistema utiliza un módulo de configuración centralizado (`src/config.js`) que permite ajustar las reglas de negocio de Walmart sin alterar el core del algoritmo.

 1. Variables de Entorno (.env)
Para proteger los datos sensibles del nodo Cuautitlán, el sistema busca las siguientes variables:
- `YMS_API_URL`: URL del sistema de gestión de patios de Walmart.
- `YMS_AUTH_TOKEN`: Token de seguridad para el consumo de APIs.
- `DB_HOST`: Dirección del servidor de base de datos para el historial de rampas.

 2. Parámetros de Negocio
Dentro de `src/config.js`, se pueden configurar los siguientes valores críticos:


| Parámetro | Descripción | Valor Default |
| :--- | :--- | :--- |
| `TIEMPO_MAX_ESPERA` | Minutos permitidos antes de lanzar alerta crítica. | 120 min |
| `PRIORIDAD_A` | Categoría de productos con pase inmediato. | `perecedero` |
| `PRIORIDAD_B` | Categoría de productos bajo esquema FIFO. | `seco` |

 3. Configuración del CI/CD (GitHub Actions)
La automatización visual se configura en `.github/workflows/main.yml`. Cada vez que se envía un **Pull Request** a la rama `develop`, el sistema:
1. Levanta un entorno virtual de Node.js.
2. Ejecuta `npm install`.
3. Corre las pruebas de `test/asignacion.test.js`.
4. Bloquea el **Merge** si las pruebas de prioridad fallan.


 Uso

Este sistema está diseñado para ofrecer interfaces diferenciadas según el rol del usuario dentro del CEDIS Cuautitlán.

 Demostración de Interfaz (Consola)
Para observar el funcionamiento del motor de asignación y el panel de control del administrador, ejecute:
```bash
node src/manual_uso.js

 Guía de Contribución

Aceptamos contribuciones de la comunidad académica y de TI para mejorar el flujo logístico del CEDIS. Para colaborar, es obligatorio seguir este flujo de trabajo profesional:

 1. Preparación del Entorno
Clona el repositorio y sincroniza la rama de integración:
```bash
git clone https://github.com
cd walmart-yms-optimizer
git checkout develop

 Roadmap (Requerimientos Futuros)

El proyecto sigue una estrategia de evolución por etapas para asegurar la estabilidad operativa del CEDIS Cuautitlán.

 Fase 1: General Availability (GA) - Próxima Entrega
- Persistencia de Datos:** Migración de arreglos temporales a una base de datos **PostgreSQL** para historial de asignaciones.
- Seguridad Robusta:** Implementación de autenticación **OAuth2** para el acceso de administradores de TI.
- API REST Completa:** Desarrollo de endpoints para consulta externa de estatus de rampas en tiempo real.

 Fase 2: Automatización Física (V2.0)
- Integración IoT:** Conexión con sensores de presencia físicos en las rampas para detectar la liberación de espacios sin intervención manual.
- App para Transportistas:** Desarrollo de una aplicación móvil que notifique vía **Push** al chofer su rampa asignada y turno.

Fase 3: Inteligencia Logística (V3.0)
- Machine Learning Avanzado:** Algoritmos predictivos para estimar horas pico de arribo basándose en el historial de tráfico y clima.
- Optimización de Rutas Internas:** Asignación de rampas no solo por prioridad, sino por cercanía al área de almacenamiento de la mercancía específica (Secos vs Refrigerados) dentro del CEDIS.

