import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreateBlog from "./Pages/CreateBlog";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<CreateBlog />} />
      </Routes>
    </>
  );
}

export default App;
