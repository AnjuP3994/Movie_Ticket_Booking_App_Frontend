import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit'
import '../Styles/movieCard.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BookingModal from './BookingModal';
import { useState } from 'react';


interface MovieCardProps {
  movieData: Movie[];
}

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


const BASE_URL = 'http://localhost:3003/uploads/';

function MovieCard({movieData}:MovieCardProps) {
  console.log('Movie Card probs ',movieData);

  return (
    <div>


    {/* {
        movieData.length>0? movieData.map((i:any)=>(
          <MDBCard className='bg-dark mb-4' style={{width:'18rem'}}>
            <MDBCardImage src={i.poster} position='top' alt='...' />
            <MDBCardBody className='text-center'>
                <MDBCardTitle className='fw-bolder fs-4'>{i.title}</MDBCardTitle>
                <div className='d-flex justify-content-between'>
                  <Link to={`/aboutMovie/${i._id}`}><MDBBtn className='my-2'>About</MDBBtn></Link>
                  <BookingModal movieData={i._id} />
                </div>
            </MDBCardBody>
          </MDBCard>
        )):""
      } */}



      {
        movieData.length > 0 ? movieData.map((movie: any) => {
          const posterUrl = BASE_URL + movie.poster; // Construct the full URL
          console.log('Movie poster URL: ', posterUrl);
          return (
            <MDBCard className='bg-dark mb-4' style={{ width: '18rem', height: '32rem'}} key={movie._id}>
              <MDBCardImage src={posterUrl} position='top' alt={movie.title} style={{height: '22rem'}} />
              <MDBCardBody className='text-center'>
                <MDBCardTitle className='fw-bolder fs-4'>{movie.title}</MDBCardTitle>
                <div className='d-flex justify-content-between mt-3'>
                  <Link to={`/aboutMovie/${movie._id}`}><MDBBtn className='my-2'>About</MDBBtn></Link>
                  <BookingModal movieData={movie._id} />
                </div>
              </MDBCardBody>
            </MDBCard>
          );
        }) : ""
      }
          
    </div>
  )
}

export default MovieCard