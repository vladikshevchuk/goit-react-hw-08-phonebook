import { Routes, Route } from "react-router-dom";
// import { Home } from "pages/Home";

export const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
};