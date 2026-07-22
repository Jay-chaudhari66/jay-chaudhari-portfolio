import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";  
import "../src/components/chatboat/ChatBot";
import ChatBot from "../src/components/chatboat/ChatBot";

function App() {
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <Home />
      <ChatBot/>
      <Footer />
    </>
  );
}

export default App;