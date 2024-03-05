"use client";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "./calendar.module.css";

export default function Calendar() {
  return (
    <div className={styles.calendarContainer}>
      <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridWeek" />
    </div>
  );
}
