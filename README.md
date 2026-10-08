# DevTasks

## Descripción

DevTasks es una web para gestionar tareas. Puedes añadir, completar, eliminar y filtrar tareas (todas, pendientes, completadas o solo números). No deja crear tareas vacías ni con `@`. Las tareas se guardan en el navegador (`localStorage`).

## Instalación

```bash
git clone https://github.com/cristhian-jesus1/PROJ1-Proyecto-Automatizacion.git
cd PROJ1-Proyecto-Automatizacion
npm install
```

## Tests

```bash
npm test
```

### Qué comprueba cada test

**isValidTask**
- Acepta una tarea con texto.
- Rechaza una tarea vacía.
- Rechaza una tarea con solo espacios.
- Rechaza una tarea con `@`.

**createTask**
- Crea una tarea con su texto, un `id` y como pendiente.
- Quita los espacios del principio y del final del texto.

**filterTasks**
- `all`: devuelve todas las tareas.
- `pending`: devuelve solo las pendientes.
- `completed`: devuelve solo las completadas.
- `number`: devuelve solo las tareas que son números.

**getTaskStats**
- Calcula bien el total, las pendientes y las completadas.
- Calcula bien el total de tareas.

## Archivos

- **`index.html`**: la estructura de la página: el formulario, los botones de filtro, la lista de tareas y las estadísticas.
- **`js/app.js`**: hace funcionar la página. Lee el formulario, muestra los errores, pinta las tareas, gestiona los botones (completar, eliminar, filtros) y guarda en `localStorage`.
- **`js/taskManager.js`**: las funciones con la lógica:
  - `createTask`: crea una tarea nueva.
  - `isValidTask`: comprueba si una tarea es válida.
  - `filterTasks`: filtra las tareas.
  - `getTaskStats`: cuenta las tareas.
- **`tests/`**: los tests de `taskManager.js`, hechos con Vitest.

## GitHub Actions

- **CI** (`ci.yml`): en cada Pull Request a `main`, instala las dependencias y pasa los tests.
- **Deploy** (`deploy.yml`): en cada merge a `main`, publica la web en GitHub Pages.

## Pull Requests

Cada cambio se hace en una rama nueva y se abre un Pull Request a `main`. Si el CI pasa los tests, se hace el merge.

## Deploy

https://cristhian-jesus1.github.io/PROJ1-Proyecto-Automatizacion/

## Dependencias

Dependabot (`.github/dependabot.yml`) revisa cada semana las dependencias de npm y de GitHub Actions. Si hay versiones nuevas, crea un Pull Request automáticamente y el CI lo prueba.

## Arquitectura

- **`app.js`**: la parte visual (lo que ve y toca el usuario).
- **`taskManager.js`**: la lógica (no toca el HTML).
- **`tests/`**: prueban la lógica.

Separarlo así hace que el código sea más ordenado y que la lógica se pueda probar sin abrir el navegador.
