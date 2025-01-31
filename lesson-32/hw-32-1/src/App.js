import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthProvider";

import PrivateRoute from "./components/PrivateRoute";

import TodoPage from "./pages/Todo";
import Layout from "./components/Layout/Layout";
import Resume from "./pages/Resume";
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
                            <Resume />
                        </PrivateRoute>
                    } />
                    <Route path="/todo" element={
                        <PrivateRoute>
                            <TodoPage />
                        </PrivateRoute>
                    } />
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
