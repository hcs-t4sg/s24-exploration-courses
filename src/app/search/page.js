import styles from "./coursepage.module.css";


export default async function Home() {
  return (
    
    <div className={styles.container}>
      
        <div className={styles.topBar}>
            <input type="text" placeholder="Course Title" />
            <nav>
                <a href="#">Course</a>
                <a href="#">Instructor</a>
                <a href="#">School</a>
                <a href="#">Department</a>
            </nav>
        </div>
        <div className={styles.courseInfo}>
            <div className={styles.course}>
                <div className={styles.courseName}>COMPSCI 50: Introduction to Computer Science</div>
                <div className={styles.courseDate}>Spring 2024</div>
                <div className={styles.courseInstructor}>David Malan</div>
                <div className={styles.courseDescription}>Description: This is CS50.</div>
                <div className={styles.courseEnrolled}>Enrolled: Uncapped</div>
                <div className={styles.courseGrade}>Course Grade: 4.5/5</div>
            </div>
            <div className={styles.course}>
                <div className={styles.courseName}>ECON 10B: Introduction to Macroeconomics</div>
                <div className={styles.courseDate}>Spring 2024</div>
                <div className={styles.courseInstructor}>Jason Furman</div>
                <div className={styles.courseDescription}>Description: Make Money</div>
                <div className={styles.courseEnrolled}>Enrolled: Uncapped</div>
                <div className={styles.courseGrade}>Course Grade: 4.5/5</div>
            </div>
            <div className={styles.course}>
                <div className={styles.courseName}>EXPOS 20</div>
                <div className={styles.courseDate}>Spring 2024</div>
                <div className={styles.courseInstructor}>Instructor Name</div>
                <div className={styles.courseDescription}>Description: Required Course for Writing</div>
                <div className={styles.courseEnrolled}>Enrolled: Uncapped</div>
                <div className={styles.courseGrade}>Course Grade: 4.5/5</div>
            </div>
            <div className={styles.course}>
                <div className={styles.courseName}>EXPOS 20</div>
                <div className={styles.courseDate}>Spring 2024</div>
                <div className={styles.courseInstructor}>Instructor Name</div>
                <div className={styles.courseDescription}>Description: Required Course for Writing</div>
                <div className={styles.courseEnrolled}>Enrolled: Uncapped</div>
                <div className={styles.courseGrade}>Course Grade: 4.5/5</div>
            </div>
        </div>
    </div>
  );
}
