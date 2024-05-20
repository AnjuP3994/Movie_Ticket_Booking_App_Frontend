import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../Styles/aboutMovie.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BookingModal from './BookingModal'
import { useParams } from 'react-router-dom'
import { getAMovieAPI } from '../Services/allAPI'
import { BASE_URL } from '../Services/baseURL'


interface Movie {
  poster:string
  title: string;
  rating: string;
  about: string;
  hours: string;
  type: string;
  releaseDate: string;
  director: string;
  producers: string;
  languages: string;
}

function AboutMovie() {

  const { id } = useParams();
  console.log(id);
  

  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  const handleAllMovies = async(id: any) => {
    try {
      const {data} = await getAMovieAPI(id)
      // console.log('getAMovieAPI response ', data.getamovie); 
      setMovieDetails(data.getamovie)
    } catch (error) {
      console.log('Error handleAllMovies: '+error);  
    }
  }
  console.log('movieDetails',movieDetails);  

  useEffect(()=>{
    handleAllMovies(id);
  },[])

  return (
    <div>
      <Header/>

      <div className='bg pt-5 mt-5'>
        <Container className='mt-2'>
          {movieDetails && (
            <Row>
            <Col>
              <img src={`${BASE_URL}/uploads/${movieDetails.poster}`}
              className='image' alt="" />
            </Col>

            <Col className='pt-5'>
              <h1>{movieDetails.title}</h1>
              <div className='rating text-warning'>
                <span><i className="fa-solid fa-star"></i></span>
                <span className='rnum'>{movieDetails.rating}</span>
              </div>
              <div className='mt-4'>
                <h5>About the Movie</h5>
                <p>{movieDetails.about}</p>
                <p>{movieDetails.hours} &nbsp;&#8226;&nbsp; {movieDetails.type}</p>
                <p><b>Release date:</b> {movieDetails.releaseDate}</p>
                <p><b>Director:</b> {movieDetails.director}</p>
                <p><b>Producers:</b> {movieDetails.producers}</p>
                <p><b>Languages:</b> {movieDetails.languages}</p>
              </div>
              <div className='mt-4'>
                {/* <BookingModal/> */}
              </div>
            </Col>
          </Row>
          )}
          
        </Container>
      </div>

      <Footer/>
    </div>
  )
}

export default AboutMovie