import styles from "./index.module.scss";

const buttonStyles: Record<"primary" | "secondary" | "outline", string> = {
  ["primary"]: styles.wrapper,
  ["secondary"]: `${styles.wrapper} ${styles.secondary}`,
  ["outline"]: `${styles.wrapper} ${styles.outline}`,
};

interface ButtonProps {
  onClick?: () => void;
  kind?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  onClick,
  icon,
  disabled,
  type,
  children,
  kind = "primary",
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={buttonStyles[kind]}
    type={type}
    disabled={disabled}
  >
    {icon ?? null}
    <span>{children}</span>
  </button>
);
