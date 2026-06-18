# Plan de Pantallas

## Landing Page
- Objetivo: introducir la app y llevar al Home.
- Componentes: Container, SectionTitle, Button, ThemeToggle.
- Flujo: ver propuesta, elegir tema si se desea, entrar.
- Estados: contenido normal.
- Responsive: hero apilado en móvil.
- Accesibilidad: CTA claro y foco visible.

## Home Page
- Objetivo: explorar pokemones.
- Componentes: NavBar, FilterBar, PokemonList, Pagination.
- Flujo: buscar, filtrar, ordenar, paginar, abrir detalle.
- Estados: carga, vacío, error, resultados.
- Validaciones: no aplica formulario.
- Responsive: 1 columna móvil, 2 tablet, 3 o 4 desktop.
- Conexión Zustand: pokemones, filtros, paginado.

## Detail Page
- Objetivo: ver la información completa de un pokemon.
- Componentes: PokemonDetail, PokemonStats, TypeBadgeList, Button.
- Flujo: abrir desde card y volver al Home.
- Estados: encontrado, no encontrado.
- Responsive: layout de una o dos columnas.

## Create Pokemon Page
- Objetivo: crear un pokemon nuevo.
- Componentes: PokemonForm, Input, Select, Button, ErrorState.
- Flujo: completar, validar, guardar, redirigir al detalle.
- Validaciones: nombre, imagen, stats, tipos, duplicados.
- Responsive: formulario de una columna con secciones claras.
- Accesibilidad: errores textuales y focus visible.

## Not Found Page
- Objetivo: resolver rutas inválidas o IDs inexistentes.
- Componentes: EmptyState, Button.
- Flujo: informar y volver al Home.
- Responsive: mensaje centrado y legible.

## Cobertura extra
- El detalle de pokemon no encontrado puede reutilizar Not Found.
- Los estados vacíos de búsqueda y filtro deben ser explícitos.
