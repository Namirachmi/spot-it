import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import React from 'react'
import './start.css'
import Header from '../header/header'
import Introduction from './introduction';

const Start = () => {
  {/* Edit Back-end disini! */}
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Silakan masukkan nama terlebih dahulu!');
      return;
    }
    navigate('/introduction');
  };

  return (
    <div className="pageContainer">
      <Header /> 

      <main className="content">
        <form onSubmit={handleSubmit} className="quizForm">
          <input
            type="text"
            className="inputName"
            placeholder="Type your name here ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <button type="submit" className="buttonStart">
               Start
            </button>
        </form>
      </main>
    </div>
  )
}

export default Start
