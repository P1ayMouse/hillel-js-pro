import {createContext} from "react";
import {login, logout} from "../store/slices/userSlices";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}