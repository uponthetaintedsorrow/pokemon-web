# Checklist de Verificación

Verificación realizada con revisión estática del código, `npm run build`, control de line counts y respuesta HTTP de las rutas principales con `npm run dev`.

## Documentación
- [x] `ai/identity.md` existe.
- [x] `ai/design-system-plan.md` existe.
- [x] `ai/component-plan.md` existe.
- [x] `ai/screens-plan.md` existe.
- [x] `ai/state-plan.md` existe.
- [x] `ai/verification-checklist.md` existe.

## Design System
- [x] Existen tokens globales.
- [x] Existen 3 temas.
- [x] El tema cambia desde UI.
- [x] El tema afecta toda la app.
- [x] El tema persiste al recargar.
- [x] CSS Modules se usan en componentes.

## Zustand
- [x] Zustand está instalado.
- [x] No se usa Redux.
- [x] No se usa React Redux.
- [x] No hay reducers estilo Redux.
- [x] Hay stores claros.
- [x] La lógica derivada vive en selectors.
- [x] El tema persiste.

## Componentes
- [x] Button existe.
- [x] Input existe.
- [x] Select existe.
- [x] Badge existe.
- [x] Card existe.
- [x] StatBar existe.
- [x] Container existe.
- [x] SectionTitle existe.
- [x] ThemeToggle existe.
- [x] EmptyState existe.
- [x] LoadingState existe.
- [x] ErrorState existe.
- [x] Pagination existe.
- [x] NavBar existe.
- [x] SearchBar existe.
- [x] FilterBar existe.
- [x] PokemonCard existe.
- [x] PokemonList existe.
- [x] PokemonDetail existe.
- [x] PokemonCreate o PokemonForm existe.
- [x] PokemonStats existe.
- [x] TypeBadgeList existe.

## Funcionalidad
- [x] Landing funciona.
- [x] Home funciona.
- [x] Detail funciona.
- [x] Create funciona.
- [x] NotFound funciona.
- [x] Buscar exacto funciona.
- [x] Buscar ignora mayúsculas/minúsculas.
- [x] Buscar ignora espacios sobrantes.
- [x] Limpiar búsqueda funciona.
- [x] Filtrar por tipo funciona.
- [x] Filtrar por origen funciona.
- [x] Ordenar A-Z funciona.
- [x] Ordenar Z-A funciona.
- [x] Ordenar ataque asc funciona.
- [x] Ordenar ataque desc funciona.
- [x] Paginado usa 12 por página.
- [x] Crear pokemon funciona.
- [x] El creado aparece en Home.
- [x] El creado se puede filtrar.
- [x] El creado se puede ordenar.
- [x] El creado se puede ver en detalle.
- [x] Cambiar tema funciona.
- [x] El tema persiste al recargar.

## Calidad
- [x] Ningún archivo supera 250 líneas.
- [x] No hay librerías externas de estilos.
- [x] Cada archivo tiene comentario inicial si es código.
- [x] Las funciones importantes tienen comentarios.
- [x] No hay errores obvios de TypeScript.
- [x] No hay imports rotos.
- [x] No hay lógica duplicada innecesaria.
- [x] La UI es responsive.
