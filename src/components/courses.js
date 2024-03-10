"use client";

import { realtime } from "@/lib/firebase/firebase";
import { ref, get, query, orderByChild } from "firebase/database";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/lib/firebase/auth-context";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styles from "./courses.module.css";

function removeDuplicateCourses(courses) {
  const uniqueCourses = [];
  const titles = [];
  for (const course of courses) {
    if (!titles.includes(course.title)) {
      titles.push(course.title);
      uniqueCourses.push(course);
    }
  }
  return uniqueCourses;
} 

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    const dbRef = ref(realtime);
    const courseQuery = query(dbRef, orderByChild("title"));
    const newCourses = JSON.parse(localStorage.getItem("courses"));
    if (newCourses) {
      setCourses(newCourses);
      setLoading(false);
    } else {
      if (!user) {
        setLoading(false);
        return;
      }
      get(courseQuery)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const firebaseCourses = snapshot.val();
            firebaseCourses.forEach((course) => {
              course.title =
                course.subject +
                " " +
                course.catalogNumber +
                ": " +
                course.title;
            });
            const uniqueCourses = removeDuplicateCourses(firebaseCourses);
            setCourses(uniqueCourses);
            localStorage.setItem("courses", JSON.stringify(uniqueCourses));
            setLoading(false);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div className={styles.searchContainer}>
    { user ? (
      <Autocomplete
        options={courses.map((course) => course.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={loading ? "Loading..." : "Search Courses"}
          />
        )}
        sx={{
          width: "100%",
        }}
      />
    ) : (
      <Autocomplete
        disabled
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Please login to search courses"
          />
        )}
        sx={{
          width: "100%",
        }}
      />
    )}
    </div>
  );
}
