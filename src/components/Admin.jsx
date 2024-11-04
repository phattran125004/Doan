import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div style={styles.adminContainer}>
        <div style={styles.adminForm}>
          <h2>Admin Login</h2>
          <div>
            <label>
              Tài khoản:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tài khoản"
                style={styles.input}
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
                style={styles.input}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={toggleShowPassword}
              />{' '}
              Hiện mật khẩu
            </label>
          </div>
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return null;
}

const styles = {
  adminContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  adminForm: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    border: '2px solid black',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: '2px solid black',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
    borderRadius: '4px',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3',
  },
};

export default Admin;
