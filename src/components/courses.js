"use client";

import { realtime } from "@/lib/firebase/firebase";
import { ref, get, query, orderByChild } from "firebase/database";
import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styles from "./courses.module.css";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const dbRef = ref(realtime);
  const courseQuery = query(dbRef, orderByChild("title"));

  useEffect(() => {
    get(courseQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const courses = snapshot.val();
          courses.forEach((course) => {
            course.title =
              course.subject + " " + course.catalogNumber + ": " + course.title;
          });
          setCourses(courses);
          setLoading(false);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseQuery]);

  function handleSearch(e) {
    e.preventDefault();
    setKeyword(e.target.value);
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(keyword?.toLowerCase())
    );
    setFilteredCourses(filteredCourses.slice(0, 10));
  }

  return (
    <div className={styles.searchContainer}>
      <Autocomplete
        freeSolo
        options={filteredCourses.map((course) => course.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={loading ? "Loading..." : "Search Courses"}
          />
        )}
        onInputChange={handleSearch}
        sx={{
          width: "100%",
        }}
      />
    </div>
  );
}
