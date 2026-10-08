# DevTasks

## Descripción

DevTasks es una web para gestionar tareas. Puedes añadir, completar, eliminar y filtrar tareas (todas, pendientes, completadas o solo números). No deja crear tareas vacías ni con `@`.

Web Publica 
https://cristhian-jesus1.github.io/PROJ1-Proyecto-Automatizacion/

## Instalación

```bash
git clone  https://github.com/cristhian-jesus1/PROJ1-Proyecto-Automatizacion.git
https://cristhian-jesus1.github.io/PROJ1-Proyecto-Automatizacion/
cd PROJ1-Proyecto-Automatizacion
npm install
```

## Tests

```bash
npm test
```

## GitHub Actions

- **CI** (`ci.yml`): en cada Pull Request a `main`, instala las dependencias y pasa los tests.
- **Deploy** (`deploy.yml`): en cada merge a `main`, publica la web en GitHub Pages.

## Pull Requests

Cada cambio se hace en una rama nueva y se abre un Pull Request a `main`. Si el CI pasa los tests, se hace el merge.

## Deploy

https://cristhian-jesus1.github.io/PROJ1-Proyecto-Automatizacion/

## Dependencias

Dependabot (`.github/dependabot.yml`) revisa cada semana las dependencias de npm y de GitHub Actions. Si hay versiones nuevas, crea un Pull Request automáticamente.

## Arquitectura

- **`app.js`**: la parte visual (formulario, lista de tareas, botones).
- **`taskManager.js`**: la lógica (crear, validar, filtrar y contar tareas).
- **`tests/`**: los tests que comprueban `taskManager.js`.
