# Instrucciones para Cursor – Proyecto React Native (Desarrollo Móvil Integral)

## Objetivo general

Desarrollar una aplicación móvil en **React Native** que muestre **información complementaria de un videojuego** con mínimo **4 funciones**, y generar toda la **documentación obligatoria** solicitada en la materia Desarrollo Móvil Integral (versionamiento, bitácora de commits, plan de pruebas y suite de pruebas).

---

# 0. Estructura sugerida del repositorio

/app/                   → Pantallas, componentes, navegación
/assets/                → Imágenes, iconos, sonidos
/docs/
versionamiento.md
plan_pruebas.md
suite_pruebas.md
README.md
package.json

> **Cursor:** cada vez que se agregue código nuevo o se modifique funcionalidad, actualizar los archivos dentro de `/docs`.

---

# 1. Estrategia de versionamiento

(Obligatorio en la entrega)

Crear el archivo:  
`docs/versionamiento.md`

Debe incluir:

## 1.1 Plataforma utilizada
Especificar que el proyecto usa:

- **Git** para control de versiones.
- **GitHub** como repositorio remoto.

Explicar brevemente por qué:
- Colaboración sencilla
- Manejo de ramas
- Pull requests
- Historial claro de cambios

## 1.2 Bitácora de commits
Requisito mínimo: **30 commits reales**, no basura.

Reglas:

- Commits pequeños, claros y coherentes.
- Cada commit debe compilar.
- Evitar commits de más de 300–400 líneas si no es necesario.
- Utilizar convención:
  - `feat: ...` nuevas funciones
  - `fix: ...` correcciones
  - `refactor: ...` cambios internos
  - `docs: ...` documentación
  - `style: ...` cambios visuales/estilos
  - `test: ...` casos de prueba

Agregar una tabla como:

| # | Hash | Fecha | Descripción |
|---|------|--------|-------------|
| 1 | a1b2c3 | 2025-10-15 | feat: estructura inicial del proyecto |
| 2 | … | … | … |

> **Cursor:** agregar commits cada vez que se implemente una pantalla, componente, función o ajuste.

---

# 2. Plan de pruebas del proyecto

Crear el archivo:  
`docs/plan_pruebas.md`

Debe incluir estas secciones obligatorias:

## 2.1 Introducción
Breve explicación del proyecto:
- Nombre del juego
- Qué información muestra
- Público objetivo
- Qué busca resolver

## 2.2 Alcance de pruebas
Qué sí se va a probar:
- Navegación entre pantallas
- Render de componentes principales
- Funciones principales (detalles, listas, favoritos, etc.)
- Comportamiento en Android e iOS
- Pruebas básicas con **Jest** o tests de UI con **React Native Testing Library**

## 2.3 Fuera del alcance
Qué NO se probara:
- Carga masiva de datos
- Performance en miles de usuarios
- Integraciones externas no incluidas

## 2.4 Tipos de pruebas
- Pruebas funcionales
- Pruebas de regresión
- Pruebas de interfaz
- Pruebas manuales de QA básico
- Unit tests simples

## 2.5 Ambiente de prueba
Debe incluir:
- React Native versión
- Node versión
- Simuladores y dispositivos físicos:
  - Android 13+
  - iOS 17+
- Editor (VS Code)
- Librerías de navegación (`@react-navigation/native`)

## 2.6 Datos de prueba
Datos falsos para:
- lista de personajes
- misiones
- configuraciones
- perfiles

## 2.7 Riesgos
Ejemplos:
- Fallas en conexiones API (si las hay)
- Diferencias entre Android e iOS
- Errores visuales por estilos
- Bugs en navegación

---

# 3. Suite de pruebas del proyecto

Crear archivo:  
`docs/suite_pruebas.md`

Debe ser una tabla tipo:

| ID | Caso de prueba | Prioridad | Precondiciones | Datos de entrada | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|----------------|-----------|-----------------|------------------|--------|---------------------|---------------------|---------|
| CP-01 | Visualizar detalle de personaje | Alta | App instalada | Personaje "Hero X" | 1. Abrir app 2. Ir a "Personajes" 3. Seleccionar "Hero X" | Se muestra información completa | — | Pendiente |
| CP-02 | … | … | … | … | … | … | … | … |

> **Cursor:** cada nueva función debe agregar mínimo 1 caso de prueba.

---

# 4. Requerimientos funcionales mínimos (React Native)

La app debe tener **mínimo 4 funciones reales**.  
Sugerencia:

## 1. Pantalla Home
- Nombre del videojuego
- Descripción breve
- Botones de navegación

## 2. Lista de personajes
- Mostrar personajes
- Imagen + nombre
- Al tocar, abrir detalle

## 3. Detalle de personaje
- Historia
- Habilidades
- Estadísticas

## 4. Misiones o niveles
- Lista de misiones
- Dificultad, objetivo, recompensas

Opcionales (sumar puntos):
- Favoritos
- Buscador
- Noticias del juego
- Modo oscuro
- Animaciones con Reanimated

---

# 5. Checklist para Cursor

- [ ] Crear estructura base del proyecto React Native.
- [ ] Estructurar `/app/screens`, `/app/components`, `/app/navigation`.
- [ ] Crear las 4 funciones mínimas (pantallas).
- [ ] Implementar navegación con `@react-navigation`.
- [ ] Preparar datos ficticios mientras no haya API.
- [ ] Crear y rellenar `docs/versionamiento.md`.
- [ ] Crear y rellenar `docs/plan_pruebas.md`.
- [ ] Crear y rellenar `docs/suite_pruebas.md`.
- [ ] Mantener buena calidad en commits (mín. 30).
- [ ] Antes de entregar, verificar que TODO lo pedido en la minuta está cubierto.