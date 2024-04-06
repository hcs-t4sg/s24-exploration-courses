"use client"

import React, { useState } from 'react';

function ProfileForm({ onSaveProfile }) {
  const [profile, setProfile] = useState({
    name: '',
    department1: '', 
    department2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProfile(profile);
  };

  // Define a list of job titles for the dropdown
  const departments = [
    "African and African American Studies",
    "Anthropology",
    "Applied Math",
    "Art, Film, and Visual Studies",
    "Astrophysics",
    "Biomedical Engineering",
    "Chemical and Physical Biology",
    "Chemistry",
    "Chemistry and Physics",
    "Classics",
    "Comparative Literature", 
    "Comparative Study of Religion", 
    "Computer Science",
    "Earth and Planetary Sciences", 
    "East Asian Studies", 
    "Economics", 
    "Electrical Engineering",
    "Engineering Sciences",
    "English", 
    "Enviromental Science and Engineering",
    "Enviromental Science and Public Policy",
    "Folklore and Mythology", 
    "Germanic Languages and Literatures", 
    "Government",
    "History", 
    "History and Literature",
    "History and Science", 
    "History of Art and Architecture", 
    "Human Developmental and Regenerative Biology", 
    "Human Evolutionary Biology",
    "Integretive Biology", 
    "Linguistics", 
    "Mathematics", 
    "Mechanical Engineering", 
    "Molecular and Cellular Biology", 
    "Music", 
    "Near Eastern Languages and Civilizations", 
    "Neuroscience ",
    "Philosophy", 
    "Physics",
    "Psychology",
    "Romance Languages and Literature",
    "Slavic Literatures and Cultures", 
    "Social Studies", 
    "Sociology", 
    "South Asian Studies",
    "Statistics",
    "Studies of Women, Gender, and Sexuality",
    "Theater, Dance & Media"
  ];

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <select
        name="deparment of interest"
        value={profile.deparment1}
        onChange={handleChange}
      >
        <option value="">Select Department 1/option>
        {departments.map((title) => (
          <option key={title} value={title}>{title}</option>
        ))}
      </select>
      <select
        name="deparment of second interest"
        value={profile.deparment2}
        onChange={handleChange}
      >
        <option value="">Select Department 2/option>
        {departments.map((title) => (
          <option key={title} value={title}>{title}</option>
        ))}
      </select>
      <button type="submit">Save Profile</button>
    </form>
  );
}
