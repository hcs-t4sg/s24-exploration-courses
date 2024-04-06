import styles from "./courseResult.module.css";
export default function CourseResult (){
    return(
    <div>
      <div className = {styles.roundRectangle} id={styles.mainRectangle}></div>
      <div className = {styles.roundRectangle} id={styles.department}></div> 
      <div className = {styles.roundRectangle} id={styles.classType}></div>
      <div id={styles.description}>
        <p>Description: This is CS50</p>
        <p>
            <q>Office Hours</q>
        </p>
        <p>
            <q>Teaching Style</q>
        </p>
        <p>
            <q>Projects</q>
        </p>
        </div>
    </div>  
    );
}