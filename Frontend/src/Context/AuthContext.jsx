import { useState, useEffect, createContext } from "react";
import axiosInstance from "../lib/axios";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [userData, setUserData] = useState();

    const fetchUser = async()=>{
        try {
            const response = await axiosInstance.get(`/userroutes/fetchsingleuser`);
            if(response.status === 200){
                const userData = response.data.userData;
                setUserData(userData)
            }
        }
        catch(error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        fetchUser();
    },[]);

    return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );

}