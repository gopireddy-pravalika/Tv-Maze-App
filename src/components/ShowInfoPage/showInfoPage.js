import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

//Displays the detailed information of show
export default function ShowInfoPage(props) {
    let id=props.match.params.id;
    const [movie, setMovie] = useState({});
    const [image, setImage] = useState({});
    const [rating, setRating] = useState({});
    const [loading,setIsloading ]=useState(false)
    useEffect(() => {
        //fetches data based on show id \
        const url=`http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`
        Axios.get(
           url
        )
            .then(res => {
                setIsloading(true)
                setMovie(res.data);
                setImage(res.data.image)
                setRating(res.data.rating)
                //  console.log(res.data)
            }).catch(err => {
                setIsloading(true)
                console.log(err)
            })
    }, []);
    if (!loading) {
        return <h1>Loading...</h1>;
      } 
    return (
        <Container className="mt-5">
            <h2>{movie.name}</h2>
            <Row>
                <Col md="4">
                    <img
                        src={image.medium} width="100%" alt="Info"
                    />
                </Col>
                <Col md="8">
                    <div dangerouslySetInnerHTML={{ __html: movie.summary }}>
                    </div>
                    <ul>
                        <li>Status : {movie.status ||"NA"}</li>
                        <li>Popularity : {movie.popularity != undefined ? movie.popularity : 'NA'}</li>
                        <li>Language : {movie.language}</li>
                        <li>
                            Generes: {
                                movie.genres != undefined && movie.genres.length > 0 ? movie.genres.map(el => { 
                                    return <span className="ml-2">{el}</span>
                                }) : 'NA'}
                        </li>
                        <li>Premiered : {movie.premiered || "NA"}</li>
                        <li>Rating : {rating.average ||"NA"}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}