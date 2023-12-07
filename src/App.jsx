import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// import './App.css'
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
      <header><Header /></header>
      <section className="main-section">
      <main className="mx-3">
        <Outlet />
        </main>
      </section>
      <footer><Footer /></footer>
    </>
  );
}
