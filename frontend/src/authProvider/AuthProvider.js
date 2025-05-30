import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';
import useAxios from '../hook/UseAxios';
export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const axiosPublic=useAxios();

    const loginUser=async(email,password)=>{
        setLoading(true)
        // Simulate an API call for user login
        try{
            const res=await axiosPublic.post('/login', { email, password });
            if(res.data.success){
                const token=res.data.jwtToken;
                if(token){
                    localStorage.setItem('token', token);
                    const decodeUser=jwtDecode(token);
                    setuser(decodeUser);
                    setIsAuthenticated(true);
                    setLoading(false);
                }
                return res.data
            }
        }catch(error){
            console.error("Login failed:", error);
            setLoading(false);
        }
    }

    const logOutUser=()=>{
        localStorage.removeItem('token');
        setuser(null);
        setIsAuthenticated(false);
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                setuser(decodedUser);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Token decoding failed:", error);
                setuser(null);
                setIsAuthenticated(false);
            }
        } else {
            setuser(null);
            setIsAuthenticated(false);
        }
        setLoading(false);
    },[])

    const authInfo = {user,loading,isAuthenticated,logOutUser,loginUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;