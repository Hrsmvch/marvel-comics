import heroImagePath from "@/public/hero.png";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <h1>
        Marvel <span className={styles.hero_accent}>comics</span>
      </h1>
      <Image src={heroImagePath} alt="Marvel" />
    </header>
  );
}
