import { PropsWithChildren } from "react";
import styles from "./AnimatedBackground.module.scss";

export const AnimatedBackground = ({ children }: PropsWithChildren) => {
  return (
    <div aria-hidden className={styles.AnimatedBackground}>
      {children}
    </div>
  );
};
