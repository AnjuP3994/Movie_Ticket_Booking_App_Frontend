import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import malayalam from '../Assets/malayalamMovie.jpg'
import tamil from '../Assets/tamilMovies.jpg'
import english from '../Assets/englishMovies.jpg'
import hindi from '../Assets/hindiMovies.jpg'
import '../Styles/landingPage.css'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'
import { LPMoviesAPI } from '../Services/allAPI'


interface Movie {
  title: string;
  poster: string;
  rating: string;
  about: string;
  hours: string;
  type: string;
  releaseDate: string;
  director: string;
  producers: string;
  languages: string;
}

function LandingPage() {

  const [LPMovies, setLPMovies] = useState<Movie[]>([]);
  console.log('Landing page movies',LPMovies);

  const landingPageMovies = async () => {
    try {
      const {data} = await LPMoviesAPI();
      // console.log(data);
      if (data) {
        setLPMovies(data);
      } else {
        console.log("Can't get landing page movies");
      }
    } catch (error) {
      console.log("Can't get LP movies error: " + error);
    }
  };

  useEffect(() => {
    landingPageMovies();
  }, []);

  return (
    <>
      <Header/>

      <div className='mt-5 pt-4'>
        <Carousel controls={false}>
          <Carousel.Item interval={2000}>
            <img src={malayalam} alt="" style={{height:'17cm', width:'100%'}} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={tamil} alt="" style={{height:'17cm', width:'100%'}} />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img src={english} alt="" style={{height:'17cm', width:'100%'}} />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img src={hindi} alt="" style={{height:'17cm', width:'100%'}} />
          </Carousel.Item>
        </Carousel>

        <Container className='py-5 my-4'> 
          <Row>
            { LPMovies.length>0? LPMovies.map(data=>(
              <Col>
                <MovieCard movieData={[data]} />
              </Col>
            )):"Null"
            }
          </Row>
        <div className='text-center mt-5'>
          <Link to={'/moviesList'}><MDBBtn outline color='light' className='px-5 fw-bolder'>View More</MDBBtn></Link>
        </div>
        </Container>
      </div>

      <Footer/>
    </>
  )
}

export default LandingPage