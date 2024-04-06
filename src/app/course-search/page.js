import Courses from "@/components/courses";
import styles from "./page.module.css"
import CourseResult from "@/components/courseResult";

export default function CourseSearch (){
    return(
        <div className = {styles.main}>
            <Courses />
            <CourseResult />
        </div>
    );
}