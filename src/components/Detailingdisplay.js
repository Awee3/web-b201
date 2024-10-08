import React from 'react';
import './styles.css'; // Make sure to adjust the path if necessary

const DetailingDisplay = () => {
    return (
        <div>
            <header>
                <div className="logo">LAB B.201</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
            </header>
            <main>
                <h1>IMAGE NAME</h1>
                <div className="image-container">
                    <div className="image-placeholder"></div>
                    <div className="version-list">
                        <h2>VERSION LIST</h2>
                        <ul>
                            <li>v1.0.1</li>
                            <li>v1.0.1</li>
                            <li>v1.0.1</li>
                            <li>v1.0.1</li>
                            <li>v1.0.1</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DetailingDisplay;
