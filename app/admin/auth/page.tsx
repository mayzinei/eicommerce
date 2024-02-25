'use client'
import React, { useState } from 'react';
import firebase from '../../../firebase';
// import firebase from '@/firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // console.log(firebase.auth().currentUser.uid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;