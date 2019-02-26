import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-success text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} <strong>اطلس کویر</strong>{' '}
      <Link to="/About">درباره</Link> <span>|</span>{' '}
      <Link to="/Faq">سوالات متداول</Link> <span>|</span>{' '}
      <Link to="/Contacts">تماس</Link>
    </footer>
  );
};

export default Footer;
