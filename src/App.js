import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Connect from "./components/Connect/Connect";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BrowserRouter>
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        openModal={openModal}
      />
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="form to send message to alisa"
      >
        <div>
          <Connect closeModal={closeModal} />
        </div>
      </Modal>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage activeSection={activeSection} openModal={openModal} />
          }
        />
      </Routes>
      <Footer openModal={openModal} />
    </BrowserRouter>
  );
}

export default App;
