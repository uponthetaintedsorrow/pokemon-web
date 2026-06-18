// Navegación paginada con botones prev, next y acceso a páginas visibles.
import { Button } from "@/components/primitives/Button/Button";
import { cx } from "@/utils/cx";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

type PaginationItem = number | "ellipsis";

function getVisiblePages(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const items: PaginationItem[] = [1];
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) items.push("ellipsis");
  for (let page = start; page <= end; page += 1) items.push(page);
  if (end < totalPages - 1) items.push("ellipsis");
  items.push(totalPages);

  return items;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className={styles.pagination} aria-label="Paginación de pokemones">
      <Button disabled={currentPage === 1} onClick={() => onPageChange(1)} variant="ghost">
        Primera
      </Button>
      <Button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} variant="ghost">
        Anterior
      </Button>
      <div className={styles.pages}>
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis} aria-hidden="true">
              ...
            </span>
          ) : (
            <Button
              key={page}
              ariaLabel={page === currentPage ? `Página actual ${page}` : `Ir a la página ${page}`}
              className={cx(page === currentPage && styles.active)}
              onClick={() => onPageChange(page)}
              variant={page === currentPage ? "secondary" : "ghost"}
            >
              {page}
            </Button>
          ),
        )}
      </div>
      <span className={styles.info}>
        {currentPage} / {totalPages}
      </span>
      <Button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} variant="ghost">
        Siguiente
      </Button>
      <Button disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)} variant="ghost">
        Ultima
      </Button>
    </nav>
  );
}
