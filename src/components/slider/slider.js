import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import "./slider.css"

//Carousal for display data horizontally
export default function Sliders({ movieArray ,tittle }) {
 //slider configuration
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
        infinite: true
      }
     },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
      }, 
      {
       breakpoint: 300,
       settings: {
        slidesToShow: 1,
        infinite: true
      }
    }]
  };

  return (
    <Container>
      <div className="clearfix mt-5 mb-2">
      <h4 className="float-left">{tittle}</h4>
      </div>
      <Slider {...settings}>
        {movieArray.map((movie)=> {
          return (
            <React.Fragment>
               <Link to={`/movie/${movie.id}`}>
                <Col key={movie.id}>
                  <Card >
                    <Card.Img
                      variant="top"
                      src={movie.image.medium}
                    />
                    <Card.Body >
                    <Row>
                    <span className="col-md-6 text-truncate " title={movie.name}>{movie.name}</span>
                    <span className="col-md-6">{movie.rating.average}</span>
                     </Row>
                    
                     {/*  <span >{movie.name}</span>
                      <span>{movie.rating.average}</span> */}
                    </Card.Body>
                  
                  </Card>
                </Col>
                </Link>
            </React.Fragment>
          );
        })}
      </Slider>
    </Container>
  );
}
