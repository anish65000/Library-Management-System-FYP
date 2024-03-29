import * as React from "react";
import { Link } from "react-router-dom";
import onlinelibrary from "../assets/onlineLibrary1.png";
import rectangle3 from "../assets/rectangle3.jpeg";

function LoginPage() {
  return (
    <>
      <div className="header-container">
        <img src={onlinelibrary} className="background-image" alt="Library themed decoration" />
        <div className="header-content">
          <h1 className="header-title">Library <span className="highlight-text">Management</span> System</h1>
          <div className="main-content">
            <section className="login-section">
              <div className="login-left">
                <img src={rectangle3} className="login-image" alt="Library themed decoration" />
              </div>
              <div className="login-right">
                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="usernameInput" className="visually-hidden">Username</label>
                    <input type="text" id="usernameInput" className="form-control" placeholder="Username" aria-label="Username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordInput" className="visually-hidden">Password</label>
                    <input type="password" id="passwordInput" className="form-control" placeholder="Password" aria-label="Password" />
                  </div>
                  {/* Wrap the button with Link */}
                  <Link to="/StaffDashboard">
                    <button type="submit" className="login-button">S.Login</button>
                  </Link>
                </form>
                <div className="register-now">
                  Don't have an account? <Link to="/Registration">Register Now</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header-container {
          position: relative;
          height: 100vh;
        }
        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          opacity: 0.8;
        }
        .header-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #f5f5f5;
          z-index: 2;
        }
        .header-title {
          font-family: 'Inter', sans-serif;
          font-weight: 1000;
          font-size: 80px;
          margin: 0;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          color: #fff;
        }
        .highlight-text {
          color: #ffcccb; /* Highlight color */
        }
        .main-content {
          box-shadow: 0px 15px 4px rgba(0, 0, 0, 0.25);
          background-color: rgba(119, 51, 51, 0.99);
          padding: 40px;
          margin-top: 20px;
          border-radius: 10px;
          width: 80%;
          margin: auto;
        }
        @media (max-width: 991px) {
          .header-title {
            font-size: 36px;
          }
          .main-content {
            padding: 20px;
          }
        }
        .login-section {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .login-section {
            flex-direction: column;
          }
        }
        .login-left, .login-right {
          flex: 1;
        }
        .login-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-control {
          background-color: #d9d9d9;
          width: 100%;
          height: 47px;
          padding: 0 10px;
          border-radius: 5px;
        }
        .login-button {
          background-color: #d9d9d9;
          padding: 10px 20px;
          font-family: 'Inter', sans-serif;
          font-style: italic;
          align-self: center;
          cursor: pointer;
          border-radius: 5px;
        }
        .visually-hidden {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
        .register-now {
          margin-top: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #fff;
        }
        .register-now a {
          color: #d9d9d9;
          text-decoration: none;
        }
        .register-now a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default LoginPage;
