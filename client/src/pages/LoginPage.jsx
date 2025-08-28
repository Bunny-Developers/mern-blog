import '../components/modules/login.modules.css'

const LoginPage = () => {

  console.log('hello');
  const wrapper = document.querySelector('.wrapper');
  const registerLink = document.querySelector('.register-link');
  const loginLink = document.querySelector('.login-link');

  registerLink.onclick = () => {
    wrapper.classList.add('active');
  }

  loginLink.onclick = () => {
    wrapper.classList.remove('active');
  }

  return (
    <div className="wrapper">
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>

      <div className="form-box login">
        <h2 className="animation" style="--i:0; --j:21;">Login</h2>
        <form action="#" id="myForm">
          <div className="input-box animation" style="--i:1; --j:22;">
            <input type="text" required />
            <label for="username">Username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation" style="--i:2; --j:23;">
            <input type="password" required />
            <label for="password">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation" style="--i:3; --j:24;">Login</button>
          <div className="logreg-link animation" style="--i:4; --j:25;">
            <p>Don't have an account? <a className="register-link" href="#">Sign Up</a></p>
          </div>
        </form>
      </div>
      <div className="info-text login">
        <h2 className="animation" style="--i:0; --j:20;">Welcome Back!</h2>
        <p className="animation" style="--i:1; --j:21;">Login to Continue Learning.</p>
      </div>


      <div className="form-box register">
        <h2 className="animation" style="--i:17; --j:0;">Sign Up</h2>
        <form action="#" id="myForm2">
          <div className="input-box animation" style="--i:18; --j:1;">
            <input type="text" required />
            <label for="username">Username</label>
            <i class="bx bxs-user"></i>
          </div>
          <div className="input-box animation" style="--i:19; --j:2;">
            <input type="email" required />
            <label for="email">Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box animation" style="--i:20; --j:3;">
            <input type="password" required />
            <label for="password">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation" style="--i:21; --j:4;">Sign Up</button>
          <div className="logreg-link animation" style="--i:22; --j:5;">
            <p>Already have an account? <a className="login-link" href="#">Login</a></p>
          </div>
        </form>
      </div>
      <div className="info-text register">
        <h2 className="animation" style="--i:17; --j:0;">Welcome!</h2>
        <p className="animation" style="--i:18; --j:1;">Sign Up to access exclusive offers and save progress</p>
      </div>
    </div>
  );
};

export default LoginPage;
