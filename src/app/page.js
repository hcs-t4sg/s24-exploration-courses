import styles from "./page.module.css";
import Calendar from "@/components/calendar";
import Courses from "@/components/courses";



export default async function Home() {
  return (
    <div className={styles.main}> 
      <Courses />
      <Calendar />
    </div>
  );
}
