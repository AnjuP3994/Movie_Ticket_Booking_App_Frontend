//1. import BASE_URL
import { BASE_URL } from "./baseURL";
//2. import commonAPI
import { commonAPI } from "./commonAPI";





// // // user
//3. register api call
export const registerAPI = async(body)=>{
    return await commonAPI("post",`${BASE_URL}/userRegister`,body,"")
}

//4. login api call
export const loginAPI = async(body)=>{
    return await commonAPI("post",`${BASE_URL}/userLogin`,body,"")
}

//5. getUser api call
export const getUserAPI = async()=>{
    return await commonAPI("get",`${BASE_URL}/getUser/:id`)
}

//6. updateUser api call
export const updateUserAPI = async(body)=>{
    return await commonAPI("put",`${BASE_URL}/updateUser/:id`,body,"")
}

//7. getAllUser api call
export const getAllUserAPI = async()=>{
    return await commonAPI("get",`${BASE_URL}/getAllUser`)
}

//8. deleteUser api call
export const deleteUserAPI = async()=>{
    return await commonAPI("delete",`${BASE_URL}/deleteUser/:id`)
}

//9. inactiveUser api call
export const inactiveUserAPI = async(body)=>{
    return await commonAPI("put",`${BASE_URL}/inactiveUser/:id`,body,"")
}

//10. activeUser api call
export const activeUserAPI = async(body)=>{
    return await commonAPI("put",`${BASE_URL}/activeUser/:id`,body,"")
}





// // // movies
// addMovie api call
export const addMovieAPI = async(body)=>{
    return await commonAPI("post",`${BASE_URL}/add/movies`,body,"")
}

// getAMovie api call
export const getAMovieAPI = async(movieId)=>{
    // Make sure movieId is properly encoded if needed
    const encodedMovieId = encodeURIComponent(movieId);
    return await commonAPI("get",`${BASE_URL}/get/movie/${movieId}`)
}

// getAllMovie api call
export const getAllMovieAPI = async(searchkey)=>{
    return await commonAPI("get",`${BASE_URL}/getall/movies?search=${searchkey}`)   //query parameter (search-->key = searchkey-->value)
}

// updateMovies api call
export const updateMoviesAPI = async(body)=>{
    return await commonAPI("put",`${BASE_URL}/update/movies/:id`,body,"")
}

// deleteMovie api call
export const deleteMovieAPI = async()=>{
    return await commonAPI("delete",`${BASE_URL}/delete/movies/:id`)
}

// LPMovies api call
export const LPMoviesAPI = async()=>{
    return await commonAPI("get",`${BASE_URL}/landingpage/movies`)
}





// // // booking
//userBooking api call
export const userBookingAPI = async(movieId, body, headers)=>{
    return await commonAPI("post",`${BASE_URL}/userBooking/${movieId}`,body,headers)
}

//viewSeats api call
export const viewSeatsAPI = async(movieId)=>{
    return await commonAPI("get",`${BASE_URL}/view-seat/${movieId}`)
}

//viewBooking api call
export const viewBookingAPI = async()=>{
    return await commonAPI("get",`${BASE_URL}/view-bookings`)
}