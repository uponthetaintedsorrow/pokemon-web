// Barra simple para representar stats numéricos.
import styles from "./StatBar.module.css";

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
}

export function StatBar({ label, value, maxValue = 200 }: StatBarProps) {
  const width = Math.min(100, Math.round((value / maxValue) * 100));

  return (
    <div className={styles.statBar}>
      <div className={styles.header}>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className={styles.track} aria-hidden="true">
        <div className={styles.fill} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
