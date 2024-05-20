import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'
import '../Styles/movieList.css'
import { getAllMovieAPI } from '../Services/allAPI'
import { useParams } from 'react-router-dom'


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


function MovieList() {

  // const [allMovies, setAllMovies] = useState<Movie[]>([]);

  // const getAllMovies = async () => {
    // if (sessionStorage.getItem('token')) {
    //   const token = sessionStorage.getItem('token');
    //   console.log(token);
      
      // const reqHeader = {
      //   'Content-Type': 'application/json',
      //   'authorization': `Bearer ${token}`
      // };
      // console.log(reqHeader);
      
  //     try {
  //       const {data} = await getAllMovieAPI(); 
  //       console.log(data);
  //       if (data) {
  //         setAllMovies(data);
  //       } else {
  //         console.log("Can't get landing page movies");
  //       }
  //     } catch (error) {
  //       console.log("Can't get LP movies error: " +error);
  //     }
  //   } 
  // };

  // console.log(allMovies);

  // useEffect(() => {
  //   getAllMovies();
  // }, []);

  // const {id} = useParams()
  // console.log('id',id);

  const [searchkey, setSearchkey] = useState<string>('')  //searching for projects
  console.log(searchkey);

  const [allMovies, setAllMovies] = useState<Movie[]>([])

  const handleAllMovies = async() => {
    try {
      const {data} = await getAllMovieAPI(searchkey)
      // console.log('getAllMovieAPI response ', data);
      if (data) {
        setAllMovies(data)
      } 
    } catch (error) {
      console.log('Error handleAllMovies: '+error);  
    }
  }

  useEffect(()=>{
    handleAllMovies()
  },[searchkey])

  return (
    <div>
        <Header/>

        <div className='py-5 mt-5'>
            <Container>
                <h3 className='fw-bolder mt-4 my-3'>Movies on Theater</h3>
                <div className='mb-4 mt-4 w-50'>
                    <i className="fa-solid fa-magnifying-glass fw-bolder text-dark"></i>
                    <input onChange={e=>setSearchkey(e.target.value)} value={searchkey} className='form-control ps-5' placeholder="Search movies..." type='text' />
                </div>
                <Row className='mt-5'>
                  { allMovies.length>0? allMovies.map((data, index) => (
                    <Col key={index}>
                      <MovieCard movieData={[data]} />                        
                    </Col>
                  )) : "Null" } 
                </Row>
            </Container>
        </div>

        <Footer/>
    </div>
  )
}

export default MovieList