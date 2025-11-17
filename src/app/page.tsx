"use client";

import { Logo } from "./components/logo";
import { Button } from "./components/button";
import { InputBox } from "./components/inputbox";
import { MovieOutputView } from "./components/movieoutputview";
import { State, PopAction, PopReducer, initialState } from "./components/state";
import { useReducer, useState } from "react";
import React from "react";
import axios from "axios";


export default function Home() {
  const [state, dispatch] =  useReducer(PopReducer, initialState);
  const { favorite_q, mood_q, fun_q, movieinfo } = state;
  const buttonEnabled = favorite_q !== "" && mood_q !== "" && fun_q !== "";
  const [movieView, setMovieView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleSubmit = async() => {
    setMovieView(false);
    const url = "http://127.0.0.1:8000/api/generator/recommend/"
    const preferenceData = favorite_q + " " + mood_q + " " + fun_q;
    const movieData = await axios.post(url, {
      preferences: preferenceData
    });
    console.log(movieData.data);
    dispatch({type: "SET_MOVIE_INFO", value: movieData.data.recommendations});
    setIsLoading(false); 
    dispatch({type: "SET_FAVORITE_Q", value: ""});
    dispatch({type: "SET_MOOD_Q", value: ""});
    dispatch({type: "SET_FUN_Q", value: ""});
  }

  const handleValueChange = (itemType: string, item: string) => {
    dispatch({type: itemType, value: item})
  }

  const handleViewChange = () => {
    setMovieView(true);
    dispatch({type: "SET_MOVIE_INFO", value: ""});
  }

  return (
    <div className="flex flex-col justify-center items-center p-9 gap-9">
      <Logo />
      {movieView ? <div className="flex flex-col justify-center items-center gap-9">
        <InputBox header="What’s your favorite movie and why?" 
          value={favorite_q} handleValueChange={handleValueChange} Qtype="SET_FAVORITE_Q" 
          placeholder="The Shawshank Redemption Because it taught me to never give up hope no matter how hard life gets" 
        />
        <InputBox header="Are you in the mood for something new or a classic?" 
          value={mood_q} handleValueChange={handleValueChange} Qtype="SET_MOOD_Q" 
          placeholder="I want to watch movies that were released after 1990" 
        />
        <InputBox header="Do you wanna have fun or do you want something serious?" 
          value={fun_q} handleValueChange={handleValueChange} Qtype="SET_FUN_Q" 
          placeholder="I want to watch something stupid and fun" 
        />
        <Button text="Let's Go" disabled={buttonEnabled} handleSubmit={handleSubmit} />
      </div>: <MovieOutputView text={movieinfo} isloading={isLoading} handleViewChange={handleViewChange}/>}
    </div>
  );
}
