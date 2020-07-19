import React, { useReducer, useEffect, useState } from "react";
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherImage from "./WeatherImage";

const initialState = {
    city: "London",
    coordinates: {},
    errorMessage: null,
    weatherList: [],
    loading: true
};

const reducer = (state, action) => {
    switch (action.type) {
        case "search_success":
            return {
                ...state,
                loading: false,
                currentCity: action.currentCity,
                weatherList: action.weatherList
            };
        case "search_failure":
            return {
                ...state,
            };
    }
};

const Example = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //show weather for london when page is load
    useEffect(() => {
        getCoordinates("London");
    }, []);

    //take search value and send it to response
    const search = searchValue => {
        getCoordinates(searchValue);
    };

    function getCoordinates(city) {
        fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&APPID=d4853c8a009254f5de62e57935ce77db`)
            .then(response => response.json())
            .then(result => {
                getResponse(result.list[0].coord)
            })
            .catch(err => {
                console.log(err);
            });
    };

    function getResponse(coords) {
        fetch(`https://api.openweathermap.org/data/2.5/find?lat=${coords.lat}&lon=${coords.lon}&cnt=6&units=metric&APPID=d4853c8a009254f5de62e57935ce77db`)
            .then(response => response.json())
            .then(result => {
                dispatch({
                    type: "search_success",
                    currentCity: result.list[0],
                    weatherList: result.list.splice(1)
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const { loading, weatherList, currentCity } = state;

    return (
        <div className='container p-3 my-3 bg-primary text-white rounded'>
            {loading ? (<span>loading... </span>) : (
                <div className='container'>
                    <div className='row container '>
                        <div className='col '>
                            <div className='row display-2 d-flex justify-content-center'>{Math.round(state.currentCity.main.temp)}℃</div>
                            <div className='row'>
                                <div className='col d-flex justify-content-end'><h3>{state.currentCity.wind.speed} m/s</h3></div>
                                <div className='col'><WeatherImage neighbourCity={currentCity} /></div>
                            </div>
                        </div>
                        <div className='col '>
                            <div className='row display-3 d-flex justify-content-center'>{state.currentCity.name}</div>
                            <div className='row d-flex justify-content-center'><Search search={search}/></div>
                        </div>
                    </div>
                    <div className='card-group'>
                        {weatherList.map((neighbourCity, index) => (
                            <div className="card bg-info">
                                <div className='card-header'>{neighbourCity.name}</div>
                                <div className='card-body'>
                                    {Math.round(neighbourCity.main.temp)}℃ {neighbourCity.wind.speed}m/s
                                </div>
                                <WeatherImage key={index} neighbourCity={neighbourCity}/>
                            </div>))}
                    </div>
                </div>)}
        </div>
    );
}

export default Example;

