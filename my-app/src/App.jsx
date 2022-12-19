import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Success } from "./pages";
import { NavbarComponent } from "./components";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
