import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

//context
import { GithubProvider } from "./context/github/GithubContext";

function App() {

  return (
    <>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/not_found" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </>
  )
}

export default App
