# Plan de Estado Global

## Objetivo
Centralizar pokemones, filtros y tema sin usar Redux ni reducers estilo Redux.

## Stores

### Pokemon Store
- Base de datos mockeada inicial.
- Pokemones creados.
- Status y error.
- Acciones: `addPokemon`, `getPokemonById`.

### Filter Store
- `search`.
- `selectedType`.
- `selectedOrigin`.
- `sortBy`.
- `currentPage`.
- `pageSize = 12`.
- Acciones: setear, limpiar, resetear.

### Theme Store
- `currentTheme`.
- `setTheme`.
- Persistencia con `localStorage`.

## Datos derivados
- Lista total combinada.
- Lista filtrada.
- Lista ordenada.
- Lista paginada.
- Tipos disponibles.

## Regla clave
No guardar derivados en el store si pueden calcularse con selectors puros.

## Búsqueda
- Exacta.
- Ignora mayúsculas/minúsculas.
- Ignora espacios al inicio y final.

## Filtros
- Tipo.
- Origen: all, api, created.

## Ordenamiento
- none.
- nameAsc.
- nameDesc.
- attackAsc.
- attackDesc.

## Paginado
- 12 items por página.
- Al cambiar búsqueda, filtro u orden, volver a página 1.

## Creación
- El pokemon creado entra al store de creados.
- Debe poder filtrarse, ordenarse y verse en detalle.

## Persistencia
- Solo el tema persiste.
- Filtros y página se reinician por interacción, no por almacenamiento.
