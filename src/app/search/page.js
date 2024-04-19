"use client";

import { useState, useEffect } from 'react';
import { ref, get, query, orderByChild, equalTo } from 'firebase/database';
import { realtime } from "@/lib/firebase/firebase"; 
import styles from './coursepage.module.css'; 

function formatMeetingTimes(meetingPatterns) {
    const dayAbbreviations = {
        Monday: 'M',
        Tuesday: 'T',
        Wednesday: 'W',
        Thursday: 'Th',
        Friday: 'F',
        Saturday: 'Sat',
        Sunday: 'Sun'
      };
      
    return meetingPatterns.map(pattern => {
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const meetingDays = days.filter(day => pattern[`meetsOn${day}`])
                              .map(fullDay => dayAbbreviations[fullDay])
                              .join(', ');
      return `${meetingDays}: ${pattern.startTime} - ${pattern.endTime}`;
    }).join('; ');
  }
  


export default function Home() {
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("Search input state updated: ", searchInput);
    const fetchCourses = () => {
        const dbRef = ref(realtime);
        const courseQuery = query(dbRef, orderByChild("title"));
  
        get(courseQuery).then((snapshot) => {
          if (snapshot.exists()) {
            let fetchedCourses = Object.values(snapshot.val());
            
            fetchedCourses.forEach(course => {
                course.title = `${course.subject} ${course.catalogNumber}: ${course.title}`;
                if (course.instructors) {
                    course.instructorsDisplay = Object.keys(course.instructors)
                    .map(key => course.instructors[key].name)
                    .join(', ');
                } else {
                    course.instructorsDisplay = "No instructor listed";
                }
                if (course.meetingPatterns) {
                    course.formattedMeetingTimes = formatMeetingTimes(course.meetingPatterns);
                }
            });

            
            if (searchInput.trim() !== "") {
              fetchedCourses = fetchedCourses.filter(course =>
                course.title.toLowerCase().includes(searchInput.toLowerCase())
              );
            }
            setCourses(fetchedCourses);
          } else {
            setCourses([]);
          }
        }).catch((error) => {
          console.error("Error fetching courses", error);
          setCourses([]);
        });
      };
  
      fetchCourses();
    }, [searchInput]);

  const handleSearchChange = (event) => {
    console.log("Updating search input: ", event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
          <input 
            type="text" 
            placeholder="Course Title..." 
            value={searchInput} 
            onChange={handleSearchChange} 
          />
          <nav>
              <a href="#">Course</a>
              <a href="#">Instructor</a>
              <a href="#">School</a>
              <a href="#">Department</a>
          </nav>
      </div>
      <div className={styles.courseInfo}>
          {courses.map(course => (
            <div className={styles.course} key={course.id}>
              <div className={styles.courseName}>{course.title}</div>
              <div className={styles.courseInfoLine}>
                <div className={styles.courseInstructor}>{course.instructorsDisplay}</div>
                <div className={styles.courseDate}>{course.semester}</div>
              </div>
              <div className={styles.courseInfoLine}>
                <div className={styles.courseGroup}>{course.academicGroup} | {course.divisionalDist && course.divisionalDist.length > 0 ? course.divisionalDist[0] + " | " : ""} {course.subjectDescription}</div>
                <div className={styles.courseMeeting}>{course.formattedMeetingTimes}</div>
              </div>
              
              <div className={styles.courseDescription}>
                <div dangerouslySetInnerHTML={{ __html: course.description }} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
