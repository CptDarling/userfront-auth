// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Userfront from "@userfront/react";

Userfront.init("6nz865vn");

const SignupForm = Userfront.build({
  toolId: "dkakldb"
});

const LoginForm = Userfront.build({
  toolId: "mlblmrb"
});

const PasswordResetForm = Userfront.build({
  toolId: "orlrkdb"
});

const LogoutButton = Userfront.build({
  toolId: "alblmrm"
});

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  // If the user is not logged in, redirect to login
  if (!Userfront.accessToken()) {
    return <Navigate to="/login" replace={true} />
  }

  // If the user is logged in, show the dashboard
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <LogoutButton />
    </div>
  );

}
