import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = { name: '홍길동', id: 1 };
    console.log('Current User:', user);
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">홈페이지</Link>
              </li>
              <li>
                <Link to="/contact">연락처 페이지</Link>
              </li>
            </ul>
          </nav>
          <div>{user && <p>현재 사용자: {user.name}</p>}</div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
