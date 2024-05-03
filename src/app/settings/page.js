'use client';
import React, { useState } from 'react';

function SettingsPage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Save settings (here you might use localStorage, cookies, or send to a server)
        // For this example, let's just log the values
        console.log('Name:', name);
        console.log('Age:', age);
        alert('Settings saved successfully!');
    };

    return (
        <div>
            <h1>Settings Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default SettingsPage;
