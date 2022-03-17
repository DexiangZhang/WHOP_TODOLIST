import "./CSS/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import SingleTodo from "./components/singleTodo";
import EditTodo from "./components/editTodo";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newToDo" element={<SingleTodo />} />
          <Route path="/editToDo" element={<EditTodo />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
