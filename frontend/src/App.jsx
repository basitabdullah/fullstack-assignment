import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/Global.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HelpCenter />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
