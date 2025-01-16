import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

import TodoPage from "./pages/Todo";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <ThemeProvider>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<TodoPage />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<div />} />
            </Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
