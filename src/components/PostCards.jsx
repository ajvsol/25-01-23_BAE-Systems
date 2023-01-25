import React from 'react'

export default function PostCards ({title, location, hours, information }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body"></div>
        <p>Location: {location}</p>
        <p>Hours: {hours}</p>
        <p>Information: {information}</p>
    </div>
  );
  }

