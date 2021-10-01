import React from "react";
import arrow from "../../Assets/Images/arrow.png";
import clock from "../../Assets/Images/clock.png"
import line from "../../Assets/Images/line.png";
import style from "./Search.module.css";


    const Search = (props) => {
        return(
            <div className = {style.search}>
                <div className = {style.aviaTravel}>
                    <div className = {style.aviaTravelHeader}>
                        <div className = {style.aviaTravelTitle}>
                            LOT POLISHAIRLINES
                        </div>
                        <div className = {style.aviaTravelCounts}>
                            <div>
                                21049 P
                            </div>
                            <div>
                                Стоимость для одного взрослого пасажира
                            </div>
                        </div>
                    </div>
                    <div className = {style.aviaTravelDestenation}>
                        <div>
                            Москва, 
                        </div>
                        <div>
                            ШЕРЕМЕТЬЕВО 
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            (SVO)
                        </div>
                        <div>
                            <img src={arrow} alt="arrow" className = {style.aviaTravelArrow}/>
                        </div>
                        <div>
                            ЛОНДОН, 
                        </div>
                        <div>
                            Лондон, 
                        </div>
                        <div>
                            Хитроу
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            (LHR)
                        </div>
                    </div>
                    <hr className = {style.aviaTravelDestinationLine}/>
                    <div className = {style.aviaTravelTime}>
                        <div>
                            <span className = {style.aviaTravelTimeOurs}>
                                20:40
                            </span>
                            <span className = {style.aviaTravelTimeDays}>
                                18 авг.вт
                            </span>
                        </div>
                        <div className = {style.aviaTravelTimeCenter}>
                            <span >
                                <img src={clock} alt="clock" className = {style.aviaTravelTimeClock}/>
                            </span>
                            <span>
                                14 ч 45 мин
                            </span>
                        </div>
                        <div>
                            <span className = {style.aviaTravelTimeDays}>
                                19 авг. ср
                            </span>
                            <span className = {style.aviaTravelTimeOurs}>
                                09:25
                            </span>
                        </div>
                    </div>
                    <div className = {style.aviaTravelTransfer}>
                        <div>
                            <img src={line} alt="line" className = {style.aviaTravelTransferLine}/>
                        </div>
                        <div className = {style.aviaTravelCenter}>
                            1 пересадка
                        </div>
                        <div>
                            <img src={line} alt="line" className = {style.aviaTravelTransferLine}/>
                        </div>
                    </div>
                    <div className = {style.aviaTravelCompany}>
                        <div className = {style.aviaTravelCompanyName}>
                            Рейс выполняет: LOT Polish Airlines
                        </div>
                    </div>
                    <hr className = {style.aviaTravelBluyLine}/>
                    <div className = {style.aviaTravelArrival}>
                        <div>
                            ЛОНДОН, 
                        </div>
                        <div>
                            Лондон, 
                        </div>
                        <div>
                            Хитроу
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            (LHR)
                        </div>
                        <div>
                            <img src={arrow} alt="arrow" className = {style.aviaTravelArrow}/>
                        </div>
                        <div>
                            Москва, 
                        </div>
                        <div>
                            ШЕРЕМЕТЬЕВО 
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            (SVO)
                        </div>
                    </div>
                    <hr className = {style.aviaTravelDestinationLine}/>
                    <div className = {style.aviaTravelArrivalTime}>
                        <div>
                            <span className = {style.aviaTravelTimeOurs}>
                                18:10
                            </span>
                            <span className = {style.aviaTravelTimeDays}>
                                19 авг.ср
                            </span>
                        </div>
                        <div className = {style.aviaTravelTimeCenter}>
                            <span >
                                <img src={clock} alt="clock" className = {style.aviaTravelTimeClock}/>
                            </span>
                            <span>
                                23 ч 35 мин
                            </span>
                        </div>
                        <div>
                            <span className = {style.aviaTravelTimeDays}>
                                20 авг. чт
                            </span>
                            <span className = {style.aviaTravelTimeOurs}>
                                19:45
                            </span>
                        </div>
                    </div>
                    <div className = {style.aviaTravelTransfer}>
                        <div>
                            <img src={line} alt="line" className = {style.aviaTravelTransferLine}/>
                        </div>
                        <div className = {style.aviaTravelCenter}>
                            1 пересадка
                        </div>
                        <div>
                            <img src={line} alt="line" className = {style.aviaTravelTransferLine}/>
                        </div>
                    </div>
                    <div className = {style.aviaTravelCompany}>
                        <div className = {style.aviaTravelCompanyName}>
                            Рейс выполняет: LOT Polish Airlines
                        </div>
                    </div>
                        <button className = {style.aviaTravelButton}>ВЫБРАТЬ</button>
                </div>
            </div>
        )
    }

    export default Search;

