import styles from "./page.module.css";
import Calendar from "@/components/calendar";
import Courses from "@/components/courses";
import Widget from "@/components/widget";

export default async function Home() {
  return (
    <div className={styles.main}>
      <Widget></Widget>
      <Courses />
      <Calendar />
    </div>
  );
}
