import { useState } from "react";
import "./authModal.css";
import { useAuthHook } from "./authHook";

export default function AuthModal({ setShowModal }) {
  let [
    isLogin,
    setIsLogin,
    username,
    setUserName,
    password,
    setPassword,
    email,
    setEmail,
    authHandler,
  ] = useAuthHook();

  return (
    <div>
      <div className="modal-overlay">
        <div className="auth-modal">
          <button className="close-btn" onClick={() => setShowModal(false)}>
            ✕
          </button>

          <h2>{isLogin ? "Login" : "Register"}</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            {!isLogin && (
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            )}
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                authHandler(setShowModal);
              }}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="switch-mode">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
