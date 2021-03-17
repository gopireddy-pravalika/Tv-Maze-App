import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Display of search results based on search string
export default function SearchResult(props) {
    let searchString =props.match.params.value;
    const styled = {
        width: "17%",
        margin: "calc(10%/10)",
        cursor: "pointer",
        float: "left",
       
    } 
    const [searchResult ,setSearchResult] = useState([]);
    const [loading,setIsloading ]=useState(false)
    useEffect(() => {
      //fetching the data based on searchString
        if(searchString){
           setSearchResult([]);
        Axios.get(`http://api.tvmaze.com/search/shows?q=${searchString}`)
        .then(res =>{
          setIsloading(true);
          let data= res.data
           let filterdData=data.filter(element=>
            ( element.show.image !== null ||  element.show.image !== undefined));
            setSearchResult(filterdData);
        })
        .catch(err=>{
          setIsloading(true);
          console.log(err)
        })
      } 
      },[])
     
      if (!loading) {
        return <h1>Loading...</h1>;
      } 
    return(
    <Container> 
          <h3>Search Results for <i style={{color:"#fdb73b"}}>{searchString}</i></h3>
            {searchResult.map((movie)=>{
               return(
            <React.Fragment>
              <Link to={`/movie/${movie.show.id}`}>
              <Col style={styled}>
                  <Card  key={movie.show.id}>
                     <Card.Img
                      variant="top"
                      src={movie.show.image.medium}
                    />
                    <Card.Body className="text-truncate">
                      <Row>   
                    <span className="col-md-6 text-sm-left text-truncate " title={movie.show.name}>{movie.show.name}</span>
                    <span className="col-md-6 text-sm-right">{movie.show.rating.average || "0"}</span>
                    </Row>
                    </Card.Body>
                  </Card>
                  </Col>
                  </Link>
            </React.Fragment>
             ) })}
            </Container>
            )
     }