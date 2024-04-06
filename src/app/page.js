import styles from "./page.module.css";
import Calendar from "@/components/calendar";
import Courses from "@/components/courses";
import Sidepanel from "@/components/sidepanel";

export default async function Home() {
  return (
    <div className={styles.main}>
      <Sidepanel />
      <Courses />
      <Calendar />
    </div>
  );
}
