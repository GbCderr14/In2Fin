import LandingPage from "./components/landingPage";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/in2fin" />} />
        <Route path="/in2fin" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
