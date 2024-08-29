import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/Global.scss";
import NewCard from "./pages/NewCard/NewCard";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Router>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<HelpCenter />} />
        <Route path="/new-card" element={<NewCard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
