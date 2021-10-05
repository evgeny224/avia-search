import React, { useState } from "react";
import arrow from "../../Assets/Images/arrow.png";
import clock from "../../Assets/Images/clock.png"
import line from "../../Assets/Images/line.png";
import { format } from 'date-fns';
import ru from "date-fns/locale/ru";
import style from "./Search.module.css";


    const Search = (props) => {




        const [ dataFromState ] = useState(props.searchPage.flights);

        let heighPriveFilter = dataFromState.sort(function(a, b) {
            if (a.flight.price.total.amount > b.flight.price.total.amount) {
                return -1;
            }
            if (a.flight.price.total.amount < b.flight.price.total.amount) {
                return 1;
            }
            return 0;
        })
    
    
        return(
            <div className = {style.search}>
                {heighPriveFilter.map( travel => {
                    return <div className = {style.aviaTravel}>
                    <div className = {style.aviaTravelHeader}>
                        <div className = {style.aviaTravelTitle}>
                            {travel.flight.carrier.caption}
                        </div>
                        <div className = {style.aviaTravelCounts}>
                            <div>
                                {travel.flight.price.total.amount}  {travel.flight.price.total.currencyCode}
                            </div>
                            <div className = {style.aviaTravelCount}>
                                Стоимость для одного взрослого пасажира
                            </div>
                        </div>
                    </div>
                    <div className = {style.aviaTravelDestenation}>
                        <div>
                            {travel.flight.legs[0].segments[0].departureCity.caption},
                        </div>
                        <div>
                            {travel.flight.legs[0].segments[0].departureAirport.caption}
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            ({travel.flight.legs[0].segments[0].departureAirport.uid})
                        </div>
                        <div>
                            <img src={arrow} alt="arrow" className = {style.aviaTravelArrow}/>
                        </div>
                        <div>
                            {travel.flight.legs[0].segments[0].arrivalCity.caption}, 
                        </div>
                        <div>
                            {travel.flight.legs[0].segments[0].arrivalAirport.caption},
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            ({travel.flight.legs[0].segments[0].arrivalAirport.uid})
                        </div>
                    </div>
                    <hr className = {style.aviaTravelDestinationLine}/>
                    <div className = {style.aviaTravelTime}>
                        <div>
                            <span className = {style.aviaTravelTimeOurs}>
                                {format(new Date(travel.flight.legs[0].segments[0].departureDate), 'kk:mm')}
                            </span>
                            <span className = {style.aviaTravelTimeDays}>
                                {format(new Date(travel.flight.legs[0].segments[0].departureDate),  'dd MMM EEEEEE', {locale: ru}) }
                            </span>
                        </div>
                        <div className = {style.aviaTravelTimeCenter}>
                            <span >
                                <img src={clock} alt="clock" className = {style.aviaTravelTimeClock}/>
                            </span>
                            <span>
                                {Math.floor(travel.flight.legs[0].segments[0].travelDuration / 60)} ч {Math.floor(travel.flight.legs[0].segments[0].travelDuration % 60)} мин
                            </span>
                        </div>
                        <div>
                            <span className = {style.aviaTravelTimeDays}>
                                {format(new Date(travel.flight.legs[0].segments[0].arrivalDate),  'dd MMM EEEEEE', {locale: ru}) }
                            </span>
                            <span className = {style.aviaTravelTimeOurs}>
                                {format(new Date(travel.flight.legs[0].segments[0].arrivalDate), 'kk:mm')}
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
                            Рейс выполняет: {travel.flight.carrier.caption}
                        </div>
                    </div>
                    <hr className = {style.aviaTravelBluyLine}/>
                    <div className = {style.aviaTravelArrival}>
                        <div>
                            {travel.flight.legs[0].segments[0].arrivalCity.caption}, 
                        </div>
                        <div>
                            {travel.flight.legs[0].segments[0].arrivalAirport.caption},
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            ({travel.flight.legs[0].segments[0].arrivalAirport.uid})
                        </div>
                        <div>
                            <img src={arrow} alt="arrow" className = {style.aviaTravelArrow}/>
                        </div>
                        <div>
                            {travel.flight.legs[0].segments[0].departureCity.caption}, 
                        </div>
                        <div>
                            {travel.flight.legs[0].segments[0].departureAirport.caption}
                        </div>
                        <div className = {style.aviaTravelDestenationCode}>
                            ({travel.flight.legs[0].segments[0].departureAirport.uid})
                        </div>
                    </div>
                    <hr className = {style.aviaTravelDestinationLine}/>
                    <div className = {style.aviaTravelArrivalTime}>
                        <div>
                            <span className = {style.aviaTravelTimeOurs}>
                                {format(new Date(travel.flight.legs[0].segments[0].departureDate), 'kk:mm')}
                            </span>
                            <span className = {style.aviaTravelTimeDays}>
                                {format(new Date(travel.flight.legs[0].segments[0].departureDate),  'dd MMM EEEEEE', {locale: ru}) }
                            </span>
                        </div>
                        <div className = {style.aviaTravelTimeCenter}>
                            <span >
                                <img src={clock} alt="clock" className = {style.aviaTravelTimeClock}/>
                            </span>
                            <span>
                                {Math.floor(travel.flight.legs[0].segments[0].travelDuration / 60)} ч {Math.floor(travel.flight.legs[0].segments[0].travelDuration % 60)} мин
                            </span>
                        </div>
                        <div>
                            <span className = {style.aviaTravelTimeDays}>
                                {format(new Date(travel.flight.legs[0].segments[0].arrivalDate),  'dd MMM EEEEEE', {locale: ru}) }
                            </span>
                            <span className = {style.aviaTravelTimeOurs}>
                                {format(new Date(travel.flight.legs[0].segments[0].arrivalDate), 'kk:mm')}
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
                            Рейс выполняет: {travel.flight.carrier.caption}
                        </div>
                    </div>
                        <button className = {style.aviaTravelButton}>ВЫБРАТЬ</button>
                </div>})}
            </div>
        )
    }

    export default Search;

