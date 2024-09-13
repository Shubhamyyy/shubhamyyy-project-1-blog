import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
import { useEffect } from "react";


export const AppContext=createContext();


export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    async function fetchBlogPosts(page=1) {
        setLoading(true);

        let url=`${baseUrl}?page=${page}`;
        try {
            const result=await fetch(url);
            const data=await result.json();

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("Error in fetching")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    
}