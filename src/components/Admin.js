import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; 

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username === 'phattran' && password === '125004') {
      setIsLoggedIn(true);
      navigate('/'); 
    } else {
      alert('Tài khoản hoặc mật khẩu không đúng!');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-container">
        <div className="admin-form">
          <h2>Admin Login</h2>
          <div>
            <label>
              Tài khoản:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tài khoản"
              />
            </label>
          </div>
          <div>
            <label>
              Mật khẩu:
              <input
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={toggleShowPassword}
              /> Hiện mật khẩu
            </label>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  return null; 
}

export default Admin;
