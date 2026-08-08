import React, { useState } from "react";

// Dashboard & API URLs — uses Vercel env vars or falls back to production endpoints
const rawDashboardUrl = process.env.REACT_APP_DASHBOARD_URL;
const DASHBOARD_URL = (rawDashboardUrl && !rawDashboardUrl.includes("your-dashboard"))
    ? rawDashboardUrl
    : "https://zerodha-clone-dashboard-373f8piay-prathmeshs-projects-e9602d09.vercel.app/";

const rawApiUrl = process.env.REACT_APP_API_URL;
const API_URL = (rawApiUrl && !rawApiUrl.includes("your-backend"))
    ? rawApiUrl
    : "https://zerodha-clone-backend-uc3s.onrender.com";

function SignUp() {
    const [tab, setTab] = useState("signup"); // "signup" | "login"

    /* ── Signup state ── */
    const [signupForm, setSignupForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });
    const [signupError, setSignupError] = useState("");
    const [signupLoading, setSignupLoading] = useState(false);

    /* ── Login state ── */
    const [loginForm, setLoginForm] = useState({ username: "", password: "" });
    const [loginError, setLoginError] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);

    /* ── Handlers ── */
    const handleSignupChange = (e) =>
        setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

    const handleLoginChange = (e) =>
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

    const handleSignup = async (e) => {
        e.preventDefault();
        setSignupError("");
        if (signupForm.password !== signupForm.confirm) {
            setSignupError("Passwords do not match.");
            return;
        }
        setSignupLoading(true);
        try {
            const res = await fetch(`${API_URL}/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    name: signupForm.name,
                    email: signupForm.email,
                    username: signupForm.email,
                    password: signupForm.password,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Signup failed");
            // Success → go to dashboard
            window.location.href = DASHBOARD_URL;
        } catch (err) {
            setSignupError(err.message);
        } finally {
            setSignupLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError("");
        setLoginLoading(true);
        try {
            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    username: loginForm.username,
                    password: loginForm.password,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Login failed");
            // Success → go to dashboard
            window.location.href = DASHBOARD_URL;
        } catch (err) {
            setLoginError(err.message);
        } finally {
            setLoginLoading(false);
        }
    };

    return (
        <div className="zd-auth-page">
            <div className="zd-auth-card">
                {/* Logo */}
                <div className="zd-auth-logo">
                    <img src="/media/images/logo.svg?v=2" alt="Zerodha" className="zd-auth-logo-img" />
                </div>

                {/* Tabs */}
                <div className="zd-auth-tabs">
                    <button
                        className={`zd-auth-tab${tab === "signup" ? " active" : ""}`}
                        onClick={() => { setTab("signup"); setSignupError(""); }}
                    >
                        Create Account
                    </button>
                    <button
                        className={`zd-auth-tab${tab === "login" ? " active" : ""}`}
                        onClick={() => { setTab("login"); setLoginError(""); }}
                    >
                        Sign In
                    </button>
                </div>

                {/* ── SIGNUP FORM ── */}
                {tab === "signup" && (
                    <div className="zd-auth-panel">
                        <p className="zd-auth-subtitle">
                            Join 1.5+ crore investors on Zerodha
                        </p>

                        {signupError && (
                            <div className="zd-auth-error">{signupError}</div>
                        )}

                        <form onSubmit={handleSignup} className="zd-auth-form">
                            <div className="zd-field">
                                <label htmlFor="su-name">Full Name</label>
                                <input
                                    id="su-name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={signupForm.name}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>

                            <div className="zd-field">
                                <label htmlFor="su-email">Email Address</label>
                                <input
                                    id="su-email"
                                    type="email"
                                    name="email"
                                    placeholder="prathmesh@gmail.com"
                                    value={signupForm.email}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>

                            <div className="zd-field">
                                <label htmlFor="su-password">Password</label>
                                <input
                                    id="su-password"
                                    type="password"
                                    name="password"
                                    placeholder="Minimum 8 characters"
                                    value={signupForm.password}
                                    onChange={handleSignupChange}
                                    required
                                    minLength={8}
                                />
                            </div>

                            <div className="zd-field">
                                <label htmlFor="su-confirm">Confirm Password</label>
                                <input
                                    id="su-confirm"
                                    type="password"
                                    name="confirm"
                                    placeholder="Re-enter your password"
                                    value={signupForm.confirm}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="zd-auth-btn"
                                disabled={signupLoading}
                            >
                                {signupLoading ? (
                                    <span className="zd-spinner" />
                                ) : (
                                    "Create Account & Open Dashboard"
                                )}
                            </button>
                        </form>

                        <p className="zd-auth-switch">
                            Already have an account?{" "}
                            <button
                                className="zd-tab-switch-btn"
                                onClick={() => setTab("login")}
                            >
                                Sign in here
                            </button>
                        </p>
                    </div>
                )}

                {/* ── LOGIN FORM ── */}
                {tab === "login" && (
                    <div className="zd-auth-panel">
                        <p className="zd-auth-subtitle">
                            Welcome back. Sign in to your account.
                        </p>

                        {loginError && (
                            <div className="zd-auth-error">{loginError}</div>
                        )}

                        <form onSubmit={handleLogin} className="zd-auth-form">
                            <div className="zd-field">
                                <label htmlFor="li-username">Email Address</label>
                                <input
                                    id="li-username"
                                    type="email"
                                    name="username"
                                    placeholder="prathmesh@gmail.com"
                                    value={loginForm.username}
                                    onChange={handleLoginChange}
                                    required
                                    autoFocus
                                />
                            </div>

                            <div className="zd-field">
                                <label htmlFor="li-password">Password</label>
                                <input
                                    id="li-password"
                                    type="password"
                                    name="password"
                                    placeholder="Your password"
                                    value={loginForm.password}
                                    onChange={handleLoginChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="zd-auth-btn"
                                disabled={loginLoading}
                            >
                                {loginLoading ? (
                                    <span className="zd-spinner" />
                                ) : (
                                    "Sign In & Open Dashboard"
                                )}
                            </button>
                        </form>

                        <p className="zd-auth-switch">
                            Don't have an account?{" "}
                            <button
                                className="zd-tab-switch-btn"
                                onClick={() => setTab("signup")}
                            >
                                Create one
                            </button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SignUp;
