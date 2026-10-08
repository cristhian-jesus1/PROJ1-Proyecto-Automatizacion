# DevTasks

## Descripción

DevTasks es una aplicación web para apuntar tareas. Puedes añadirlas, marcarlas como hechas, eliminarlas y filtrarlas (todas, pendientes, completadas o solo números). También muestra cuántas tareas hay en total, pendientes y completadas.

No deja crear tareas vacías ni con `@`. Las tareas se guardan en el `localStorage`, así que no se pierden al recargar la página.

## Instalación

```bash
git clone https://github.com/cristhian-jesus1/PROJ1-Proyecto-Automatizacion.git
cd PROJ1-Proyecto-Automatizacion
npm install
```

Para ver la web, abre `index.html` con Live Server.

## Tests

```bash
npm test
```

Los tests (hechos con Vitest) comprueban las funciones de `taskManager.js`: validar tareas, crearlas, filtrarlas y calcular las estadísticas.

## GitHub Actions

- **CI** (`ci.yml`): cuando se hace un Pull Request a `main`, instala las dependencias y pasa los tests.
- **Deploy** (`deploy.yml`): cuando se hace un merge a `main`, publica la web en GitHub Pages.

## Pull Requests

1. Se crea una rama nueva para cada cambio.
2. Se hace un Pull Request hacia `main`.
3. El CI pasa los tests.
4. Si todo sale en verde, se hace el merge.

## Deploy

https://cristhian-jesus1.github.io/PROJ1-Proyecto-Automatizacion/

## Dependencias

Usamos **Dependabot** (`.github/dependabot.yml`). Cada semana mira si hay versiones nuevas de las dependencias de npm y de las GitHub Actions. Si encuentra alguna, crea un Pull Request automáticamente, el CI lo prueba y, si pasa, se hace el merge.

## Arquitectura

- **`taskManager.js`**: la lógica (crear, validar, filtrar y contar tareas). No toca el HTML.
- **`app.js`**: la parte visual. Lee el formulario, pinta las tareas en la página y gestiona los botones. Usa las funciones de `taskManager.js`.
- **`tests/`**: los tests que comprueban que `taskManager.js` funciona bien.

Así, si cambiamos la lógica no tocamos la parte visual, y podemos probar el código sin abrir el navegador.
