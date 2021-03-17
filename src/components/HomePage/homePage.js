import React, { useState, useEffect } from "react";
import axios from "axios";
import { HomeWrapper } from "./style";
import Sliders from "../slider/slider";

//Top rated movies and genre wise show details displayed on home page using carousal
export default function HomePage() {
  const [topRatedList, setTopRatedList] = useState([]);
  const [allGenresResult, setAllGenresResult] = useState([]);
  const [loading,setIsloading ]=useState(false);

  useEffect(() => {
    //api call to fetch all shows details
   axios.get('http://api.tvmaze.com/shows')
      .then(response => {
        setIsloading(true)
        let data = response.data;

        let filterGenres= genreRetrival(data);
        dataRetrivalByGenre(data,filterGenres)
        topRatedShows(data);
      })
      .catch(error => {
        setIsloading(true);
        console.log(error)
      });

  }, []);

  //collection of all genres from api response
  const genreRetrival =(data)=>{
      let genres = [];
      data.map((s) => {
        genres.push(...s.genres)
      });
      let filterGenres = [...new Set(genres)];
      return filterGenres;
    }

//genre based shows retrival
const dataRetrivalByGenre=(data,filterGenres)=>{
       
        filterGenres.forEach((gener) => {
          let genreBasedResult = []
          data.filter(el => {
            if (el.genres.includes(gener)) {
              el['genre'] = gener
              genreBasedResult.push(el)
            }
          })
          if (genreBasedResult.length >= 5) {
            allGenresResult.push(JSON.parse(JSON.stringify(genreBasedResult)))
          }
        })
    }
    //sorted data by rating for top rated shows
    const  topRatedShows =(data)=>{;
    let filterdRatingList=data
    .filter((show) => show.rating.average)
    .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1)).slice(0, 6);

    setAllGenresResult(allGenresResult);
    setTopRatedList(filterdRatingList);
    }
  
  if (!loading) {
    return <h1>Loading...</h1>;
  } 

  return (
     <HomeWrapper data-testid="homeWrapper">
        <div>
          <Sliders data-testid="movieArray" movieArray={topRatedList} tittle="Top Rated Movies" />
          {allGenresResult.map((genreMovieArray) => {
            return <Sliders movieArray={genreMovieArray} tittle={genreMovieArray[0].genre} />
          })}

        </div>
      </HomeWrapper>
    
  );
}