import React, { useState, useEffect } from 'react'
import '../components/modules/login.modules.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, password, username });
    // Reset form fields
    setEmail('');
    setPassword('');
    setUsername('');
  }

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (isActive) {
      wrapper.classList.add('active');
    } else {
      wrapper.classList.remove('active');
    }
  }, [isActive]);

  const handleRegisterClick = () => {
    setIsActive(true);
  }

  const handleLoginClick = () => {
    setIsActive(false);
  }

  return (
    <div className={`wrapper ${isActive ? 'active' : ''}`}>
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>

      <div className="form-box login">
        <h2 className="animation" style={{ '--i': 0, '--j': 21 }}>Login</h2>
        <form onSubmit={handleSubmit} action="#" id="myForm">
          <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
            <input type="text" required value={username} onChange={handleChangeUsername} />
            <label htmlFor="username">Username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation" style={{ '--i': 2, '--j': 23 }}>
            <input type="password" required value={password} onChange={handleChangePassword} />
            <label htmlFor="password">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 }}>Login</button>
          <div className="logreg-link animation" style={{ '--i': 4, '--j': 25 }}>
            <p>Don't have an account? <a className="register-link" href="#" onClick={handleRegisterClick}>Sign Up</a></p>
          </div>
        </form>
      </div>
      <div className="info-text login">
        <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back!</h2>
        <p className="animation" style={{ '--i': 1, '--j': 21 }}>Login to Continue Learning.</p>
      </div>


      <div className="form-box register">
        <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Sign Up</h2>
        <form onSubmit={handleSubmit} action="#" id="myForm2">
          <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
            <input type="text" required value={username} onChange={handleChangeUsername} />
            <label htmlFor="username">Username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
            <input type="email" required value={email} onChange={handleChangeEmail} />
            <label htmlFor="email">Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box animation" style={{ '--i': 20, '--j': 3 }}>
            <input type="password" required value={password} onChange={handleChangePassword} />
            <label htmlFor="password">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 21, '--j': 4 }}>Sign Up</button>
          <div className="logreg-link animation" style={{ '--i': 22, '--j': 5 }}>
            <p>Already have an account? <a className="login-link" href="#" onClick={handleLoginClick}>Login</a></p>
          </div>
        </form>
      </div>
      <div className="info-text register">
        <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome!</h2>
        <p className="animation" style={{ '--i': 18, '--j': 1 }}>Sign Up to access exclusive offers and save progress</p>
      </div>
    </div>
  );
}

export default LoginPage;