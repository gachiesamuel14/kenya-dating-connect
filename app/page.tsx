'use client';

import { useEffect, useState } from 'react';
import { getUser, login, signup, logout } from '@netlify/identity';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  const handleSignup = async () => {
    try {
      const u = await signup(email, password);
      setUser(u);
    } catch (e) {
      alert('Signup failed: ' + e);
    }
  };

  const handleLogin = async () => {
    try {
      const u = await login(email, password);
      setUser(u);
    } catch (e) {
      alert('Login failed');
    }
  };

  if (!user) {
    return (
      <div className="container">
        <h1>Kenya Dating Connect</h1>
        <p>Find people near you in Kenya.</p>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
        <button className="btn" onClick={handleSignup}>Sign Up</button>
        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Welcome, {user.email}</h1>
      <p>Location-based matching coming soon. Enable GPS to find nearby matches in Nairobi, Mombasa, Kisumu, etc.</p>
      <button className="btn" onClick={() => { logout(); setUser(null); }}>Logout</button>
    </div>
  );
}
