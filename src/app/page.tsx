import styles from "./page.module.css";
import Header from "@/components/header";
import BikesSection from "@/components/bikes-section";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <BikesSection />
    </main>
  );
}
