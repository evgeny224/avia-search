import React from "react";
import style from "./Sidebar.module.css";
import {  useHistory  } from "react-router-dom";




    const Sidebar = (props) => {
        
        let history =  useHistory();

        const price1 = () => {
            history.push("/lowprice")
    }
        const price2 = () => {
            history.push("/heighprice")
    }
        const price3 = () => {
            history.push("/traveltime")
    }

    const oneTransfer = () => {
        history.push("/transfer")
}

    const noTransfer = () => {
        history.push("/notransfer")
    }

        return(
            <div className = {style.sidebar}>
                <div className = {style.title}>
                    Сортировать
                </div>
                <div className = {style.input}>
                    <input type="radio" name="sort" onClick ={price1}/> - по возрастанию цены.
                </div>
                <div className = {style.input}>
                        <input type="radio" name="sort" onClick ={price2}/> - по убыванию цены.
                </div>
                <div className = {style.input}>
                    <input type="radio" name="sort" onClick ={price3}/> - по по времени в пути.
                </div>
                <div>
                    Фильтровать
                </div>
                <label className = {style.inputFiltr}>
                    <input className = {style.inputFiltrinInner } type="radio" name="filtr" onClick ={oneTransfer}/> - 1 пересадка.
                </label>
                <br />
                <label className = {style.inputFiltr}>
                    <input type="radio" name="filtr" className = {style.inputFiltrinInner } onClick ={noTransfer}/> - без пересадок.
                </label>
            </div>
        )
    }

    export default Sidebar;
