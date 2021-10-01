import React from "react";
import SearchContainer from "../../Components/Search/SearchContainer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./SearchPage.module.css";


    const SearchPage = (props) => {
        return(
            <div className = {style.searcPage}>
                <Sidebar className = {style.sidebarComponent}/>
                <SearchContainer className = {style.searcComponent}/>
            </div>
        )
    }

    export default SearchPage;