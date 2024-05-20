import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  import Form from 'react-bootstrap/Form';
import { Link, useParams } from 'react-router-dom';


interface BookingModalProps {
  movieData: Movie; // Assuming Movie is defined in your context
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

function BookingModal({ movieData }: BookingModalProps) {
  console.log('movie id',movieData);
  

  const getFormattedDate = (daysToAdd: number = 0): string => {
    const today: Date = new Date();
    today.setDate(today.getDate() + daysToAdd);
    return today.toISOString().substr(0, 10);
  };

  const [staticModal, setStaticModal] = useState<boolean>(false);
  const [selectedTheater, setSelectedTheater] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>("");

  const toggleOpen = () => setStaticModal(!staticModal);

  const [minDate, setMinDate] = useState<string>(getFormattedDate());
  const maxDate: string = getFormattedDate(7); // Set maximum date to 5 days ahead

  const handleTheaterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheater(e.target.value);
  };
  // console.log(selectedTheater);
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };
  // console.log(selectedDate);
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };
  // console.log(selectedTime);



  const isFormValid = (): boolean => {
    return selectedTheater !== "" && selectedDate !== "" && selectedTime !== "";
  };
  
  

  return (
    <div>
        <div>
            <MDBBtn onClick={toggleOpen} className='my-2'>Book Ticket</MDBBtn>
        </div>

        <MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='text-warning fs-3 fw-bolder'>Book Tickets</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='py-3 pb-4'>
                <div>
                  <label className='d-flex text-start'>Coose Theater</label>
                  <Form.Select aria-label="Default select example" onChange={handleTheaterChange} value={selectedTheater}>
                    <option>Select</option>
                    <option>PVR: Forum Mall, Kochi</option>
                    <option>PVR: Lulu, Kochi</option>
                    <option>Cinepolis: Centre Square Mall, Kochi</option>
                    <option>Cinepolis: VIP Centre Square Mall, Kochi</option>
                    <option>MY Cinemas RedCarpet: Kariyad</option>
                    <option>PVR: Oberon Mall, Kochi</option>
                  </Form.Select>
                </div>
                <div>
                <div className='my-3'>
                  <label className='d-flex text-start'>Select Date</label>
                  <input type="date" min={minDate} max={maxDate} className='form-control w-50' onChange={handleDateChange} value={selectedDate} />
                </div>
                <div>
                  <label className='d-flex text-start'>Select Time</label>
                  <Form.Select aria-label="Default select example" onChange={handleTimeChange} value={selectedTime}>
                    <option>Select</option>
                    <option>10AM - 12PM</option>
                    <option>2PM - 4PM</option>
                    <option>5PM - 7PM</option>
                    <option>9PM - 11PM</option>
                  </Form.Select>
                </div>
                </div>
            </MDBModalBody>
            <MDBModalFooter className='d-flex justify-content-center'>
              {isFormValid() ? (
                <Link to={`/booking/${movieData}?theater=${selectedTheater}&date=${selectedDate}&time=${selectedTime}`}><MDBBtn color='warning' className='text-dark fw-bolder px-3'>Book Seats</MDBBtn></Link>
              ) : (
                <MDBBtn color='warning' className='text-dark fw-bolder px-3' disabled>Book Seats</MDBBtn>
              )}
              </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default BookingModal