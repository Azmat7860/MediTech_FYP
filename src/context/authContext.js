import { createContext } from "react";

export const authContext = createContext({
    isLoggedIn: false,
    login: () =>{},
    logout: () =>{},
    userData: {},
    patientData: {},
    setUser: ()=>{},
    clearUser: ()=>{},
    setPatient: ()=>{},
    clearPatient: ()=>{},

})