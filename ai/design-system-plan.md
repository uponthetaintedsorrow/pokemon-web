# Plan del Design System

## Objetivo
Definir una base visual consistente, tematizable y reutilizable para toda la SPA.

## Tokens base
- Color: primary, secondary, background, surface, surface-strong, text, border, muted, danger, success.
- Espaciado: xs, sm, md, lg, xl.
- Radius: sm, md, lg.
- Sombras: sm, md.
- Tipografía: base, sizes sm/md/lg/xl.
- Transición: fast.

## Temas disponibles
- `mysticNight`.
- `berryLight`.
- `classicBattle`.

## Aplicación de temas
- El tema seleccionado vive en Zustand.
- El valor se persiste con `zustand/middleware`.
- El tema se aplica al contenedor raíz mediante atributos y CSS variables.
- Los componentes consumen variables, no colores sueltos.

## Variables CSS globales
- `--color-primary`.
- `--color-secondary`.
- `--color-background`.
- `--color-text`.
- `--color-surface`.
- `--color-surface-strong`.
- `--color-border`.
- `--color-muted`.
- `--color-danger`.
- `--color-success`.
- `--radius-sm`.
- `--radius-md`.
- `--radius-lg`.
- `--space-xs`.
- `--space-sm`.
- `--space-md`.
- `--space-lg`.
- `--space-xl`.
- `--font-base`.
- `--font-size-sm`.
- `--font-size-md`.
- `--font-size-lg`.
- `--font-size-xl`.
- `--transition-fast`.
- `--shadow-sm`.
- `--shadow-md`.

## Componentes primitivos necesarios
- Button.
- Input.
- Select.
- Badge.
- Card.
- StatBar.
- Container.
- SectionTitle.
- ThemeToggle.
- EmptyState.
- LoadingState.
- ErrorState.
- Pagination.

## Componentes compuestos
- NavBar.
- SearchBar.
- FilterBar.
- PokemonCard.
- PokemonList.
- PokemonDetail.
- PokemonCreate.
- PokemonForm.
- PokemonStats.
- TypeBadgeList.

## Pantallas que consumen el sistema
- Landing Page.
- Home Page.
- Detail Page.
- Create Pokemon Page.
- Not Found Page.

## Cómo evitar repetir estilos
- Reutilizar tokens y clases base.
- Encapsular estilos por componente.
- Mantener estados visuales en las variantes del componente, no en páginas.

## Contraste
- Todos los temas deben garantizar legibilidad sobre fondo, superficie y botones.
- Los estados de error y éxito deben ser distinguibles sin depender del contexto.

## CSS Modules
- Cada componente visual debe vivir en su propio módulo CSS.
- Los estilos globales solo cubren reset, body, tokens y layout raíz.
