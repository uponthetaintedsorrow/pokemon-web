# Plan de Componentes

## Componentes primitivos

### Button
- Responsabilidad: ejecutar acciones.
- Props: variante, type, disabled, onClick, ariaLabel, children.
- Estados: normal, hover, focus, disabled.
- Archivo sugerido: `src/components/primitives/Button/Button.tsx`.
- Accesibilidad: foco visible, `type` explícito.
- Lógica prohibida: filtros o navegación.

### Input
- Responsabilidad: capturar texto.
- Props: label, value, onChange, error, placeholder, name, type.
- Estados: vacío, con error, focus.
- Accesibilidad: label asociado.
- Lógica prohibida: validación compleja.

### Select
- Responsabilidad: elegir una opción.
- Props: label, value, options, onChange, error.
- Estados: normal, focus, error.
- Accesibilidad: label visible.

### Badge
- Responsabilidad: mostrar tipo u origen.
- Props: tone, children.
- Lógica prohibida: cálculo de datos.

### Card
- Responsabilidad: contener contenido visual.
- Props: children, className, asLink opcional.
- Reutilización: base para cards de pokemones.

### StatBar
- Responsabilidad: visualizar una stat comparativa.
- Props: label, value, maxValue.

### Container
- Responsabilidad: limitar ancho y alinear contenido.

### SectionTitle
- Responsabilidad: unificar jerarquía de títulos.

### ThemeToggle
- Responsabilidad: cambiar entre temas.
- Conexión: Zustand de tema.

### EmptyState
- Responsabilidad: explicar ausencia de datos.

### LoadingState
- Responsabilidad: indicar carga.

### ErrorState
- Responsabilidad: mostrar error recuperable.

### Pagination
- Responsabilidad: navegar páginas.
- Lógica prohibida: filtrar u ordenar.

## Componentes del dominio Pokémon

### NavBar
- Responsabilidad: navegación principal.
- Contiene: Home, Create, SearchBar, ThemeToggle.

### SearchBar
- Responsabilidad: búsqueda exacta por nombre.
- Lógica prohibida: filtrar directamente.

### FilterBar
- Responsabilidad: tipo, origen, ordenamiento y limpieza.

### PokemonCard
- Responsabilidad: resumir un pokemon.
- Contiene: imagen, nombre, tipos, origen, ataque.

### PokemonList
- Responsabilidad: renderizar colección y estados.

### PokemonDetail
- Responsabilidad: mostrar detalle completo.

### PokemonCreate
- Responsabilidad: página contenedora para creación.

### PokemonForm
- Responsabilidad: formulario controlado y validado.

### PokemonStats
- Responsabilidad: visualizar stats en detalle.

### TypeBadgeList
- Responsabilidad: mostrar lista de tipos.

## Reglas transversales
- Los componentes visuales deben ser presentacionales.
- Las páginas concentran la lógica con Zustand.
- Ningún componente debe duplicar lógica de selectors.
