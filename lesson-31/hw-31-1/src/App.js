import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthProvider";

import PrivateRoute from "./components/PrivateRoute";

import TodoPage from "./pages/Todo";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts";
import AboutMe from "./pages/AboutMe";
import Login from "./pages/Login";
import Registration from "./pages/Register";

function App() {
  return (
    <ThemeProvider>
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={
                        <PrivateRoute>
                            <TodoPage />
                        </PrivateRoute>
                    } />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="*" element={<div />} />
                </Route>
            </Routes>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
