import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body bg-white">
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
