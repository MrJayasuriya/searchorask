import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StatsPage from "./components/StatsPage";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import DashboardPreview from "./components/DashboardPreview";
import CompanyLogos from "./components/CompanyLogos";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FakeDoorModal from "./components/FakeDoorModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Header onOpenModal={openModal} />
              <Hero onOpenModal={openModal} />
              <CompanyLogos className="hidden relative z-10 mt-20 lg:block border-b border-n-6 pb-20" />
              <ValueProps />
              <HowItWorks />
              <UseCases />
              <DashboardPreview />
              <Testimonials />
              <FinalCTA onOpenModal={openModal} />
              <Footer />
            </div>
          }
        />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>

      <ButtonGradient />
      <FakeDoorModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default App;
