import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Facilities from './pages/Facilities';
import Doctors from './pages/Doctors';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQ from './pages/FAQ';
import LoginForm from './components/AuthForms/LoginForm';
import SignupForm from './components/AuthForms/SignupForm';
import ForgotPasswordForm from './components/AuthForms/ForgotPasswordForm';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import BookConsultation from './pages/BookConsultation';
import BookAppointment from './pages/BookAppointment';
import BookTreatment from './pages/BookTreatment';
import ConsultationList from './pages/ConsultationList'; // <-- Import added
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    return <Navigate to="/" />;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route 
            path="/book-treatment/:treatmentId" 
            element={
              isLoggedIn ? (
                <BookTreatment />
              ) : (
                <Navigate to="/login" state={{ from: '/book-treatment' }} />
              )
            } 
          />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/book-consultation/:doctorId" element={<BookConsultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/consultations" element={<ConsultationList />} />

          <Route 
            path="/login" 
            element={<LoginForm onLogin={handleLogin} />} 
          />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route 
            path="/dashboard" 
            element={
              isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/consultations" 
            element={
              isLoggedIn ? <ConsultationList /> : <Navigate to="/login" state={{ from: '/consultations' }} />
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
