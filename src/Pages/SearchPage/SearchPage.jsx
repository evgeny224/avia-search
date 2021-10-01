import React from "react";
import Search from "../../Components/Search/Search";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./SearchPage.module.css";


    const SearchPage = (props) => {
        return(
            <div className = {style.searcPage}>
                <Sidebar className = {style.sidebarComponent}/>
                <Search className = {style.searcComponent}/>
            </div>
        )
    }

    export default SearchPage;