import "./App.css";
import {Route,Routes} from "react-router-dom";
import SubmitForm from "./pages/SubmitForm";
import ViewSubmissions from "./pages/ViewSubmissions";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div  className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path= "/" element = {<SubmitForm/>} />
        <Route path= "/api/v1/create-form" element = {<SubmitForm/>} />
        <Route path="/api/v1/submissions" element = {<ViewSubmissions/>} />
      </Routes>
    </div>
  );
}

export default App;
