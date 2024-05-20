import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../Styles/booking.css'
import Swal from 'sweetalert2';
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { userBookingAPI, viewSeatsAPI } from '../Services/allAPI';
import jsPDF from 'jspdf';


function Booking() {

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const getFormattedDate = (daysToAdd: number = 0): string => {
    const today: Date = new Date();
    today.setDate(today.getDate() + daysToAdd);
    return today.toISOString().substr(0, 10);
  };
  const [minDate, setMinDate] = useState(getFormattedDate());
  const maxDate = getFormattedDate(5); // Set maximum date to 5 days ahead

  const initialTheater = params.get('theater') || 'Default Theater';
  const initialDate = params.get('date') || getFormattedDate();
  const initialTime = params.get('time') || 'Default Time';
  // console.log('Initial values',initialTheater,initialDate,initialTime);
  

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState(initialTime);
  // console.log('new values',selectedDate,selectedTime);
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  // const handlePayment = () => {
  //   Swal.fire({
  //     title: "Payment successfully!",
  //     text: 'Confirm your seats.',
  //     icon: "success"
  //     });
  // }



  const { id } = useParams();
  // console.log('movieId:',id);
  
  const [reservedSeats, setReservedSeats] = useState<string[]>([]);

  const fetchReservedSeatsData = async (id:any) => {
        try {
            const result = await viewSeatsAPI(id)
            console.log(result.data);
            if (result.status === 200) {
                const occupiedSeats = result.data.flat();
                setReservedSeats(occupiedSeats);
              
            }
        }
        catch (err) {
            console.error("Error fetching seats:", err);
        }
};
// console.log('Reserved Seats',reservedSeats);


useEffect(() => {
  fetchReservedSeatsData(id)
}, [id])
// console.log('existingUser',user);








const navigate = useNavigate();

const [selectSeat, setSelectSeat] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

const seatPrices: { [key: string]: number } = {
  'A': 300, 'B': 300, 'C': 300,
  'D': 450, 'E': 450, 'F': 450, 'G': 450,
  'H': 650, 'I': 650, 'J': 650
};

const handleSeatClick = (seatNumber: string) => {
  if (reservedSeats.includes(seatNumber)) {
    // Seat is already reserved
    return;
  }

  setSelectSeat((prevSelectedSeats) => {
    const isSelected = prevSelectedSeats.includes(seatNumber);
    const newSelectedSeats = isSelected
      ? prevSelectedSeats.filter(seat => seat !== seatNumber)
      : [...prevSelectedSeats, seatNumber];

    const newTotalPrice = newSelectedSeats.reduce((total, seat) => {
      const row = seat[0];
      return total + seatPrices[row];
    }, 0);

    setTotalPrice(newTotalPrice);
    return newSelectedSeats;
  });
};

const handleSeatsBooking = async () => {
  if (id) {
    const token = sessionStorage.getItem('token');
    const reqHeader = {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    };
    console.log('reqHeader',reqHeader);
    
    const seats = selectSeat.map(seat => (seat));
    console.log('seats',seats);
    console.log('id',id);
    
    
    try {
      const user = sessionStorage.getItem('token')
      // console.log('user',user);
      if (user) {
        const {data} = await userBookingAPI(id, { "seatNo": seats }, reqHeader);
        console.log('userBookingAPI result', data);
          if (data) {
            Swal.fire({
              title: "Payment successfully!",
              text: 'Confirm your seats.',
              icon: "success"
            });
          setReservedSeats((prevReservedSeats) => [
            ...prevReservedSeats,
            ...selectSeat,
          ]);
          setSelectSeat([]);
          setTotalPrice(0);
          generateTicketPDF();
          } 
          else {
            Swal.fire({
              title: "Please select your seats",
              icon: "warning"
            })
          }
      } else {
        Swal.fire({
          title: "Please login...",
          text: "You need to be logged in to book seats.",
          icon: "warning"
        }).then(() => {
          navigate('/userLogin');
        });
      }
    } catch (err) {
      console.error("Error booking seats:", err);
    }
  }
};
// console.log('selectSeat',selectSeat);
// console.log('totalPrice',totalPrice);





const generateTicketPDF = () => {
  const doc = new jsPDF();
  const margin = 20;
  const lineHeight = 10;
  const pageWidth = doc.internal.pageSize.getWidth();

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(40);
  doc.text("Movie Ticket", pageWidth / 2, margin, { align: 'center' });

  // Draw a line under the title
  doc.setLineWidth(0.5);
  doc.line(margin, margin + 5, pageWidth - margin, margin + 5);
  
  // Theater name
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text(`Theater:`, margin, margin + 20 + lineHeight);
  doc.setFont('helvetica', 'normal');
  doc.text(`${initialTheater}`, margin + 25, margin + 20 + lineHeight);

  // Date
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(`Date:`, margin, margin + 20 + 2 * lineHeight);
  doc.setFont('helvetica', 'normal');
  doc.text(`${selectedDate}`, margin + 15, margin + 20 + 2 * lineHeight);

  // Time
  doc.setFont('helvetica', 'bold');
  doc.text(`Time:`, margin, margin + 20 + 3 * lineHeight);
  doc.setFont('helvetica', 'normal');
  doc.text(`${selectedTime}`, margin + 15, margin + 20 + 3 * lineHeight);

  // Seats
  doc.setFont('helvetica', 'bold');
  doc.text(`Seats:`, margin, margin + 20 + 4 * lineHeight);
  doc.setFont('helvetica', 'normal');
  doc.text(`${selectSeat.join(',')}`, margin + 17, margin + 20 + 4 * lineHeight);

  // Total Price
  doc.setFont('helvetica', 'bold');
  doc.text(`Total Price:`, margin, margin + 20 + 5 * lineHeight);
  doc.setFont('helvetica', 'normal');
  doc.text(`${totalPrice}`, margin + 28, margin + 20 + 5 * lineHeight);

  // Draw a border around the ticket
  doc.setLineWidth(1);
  doc.rect(margin - 10, margin - 10, pageWidth - 2 * margin + 20, 100 + 6 * lineHeight, 'S');

  // Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text("Enjoy your movie!", pageWidth / 2, margin + 20 + 7 * lineHeight + 10, { align: 'center' });

  doc.save('ticket.pdf');
};










const isSeatOccupied = (seatId: string): boolean => {
  return reservedSeats.includes(seatId);
};

const renderSeats = (row: string) => (
  Array.from({ length: 12 }, (_, i) => i + 1).map(num => {
    const seatId = `${row}${num}`;
    const isAfterFirstThree = num === 4;
    const isAfterFourth = num === 8;

    return (
      <React.Fragment key={seatId}>
        <div
          id={seatId}
          className={`seat ms-${num === 1 ? 3 : 2} ${isSeatOccupied(seatId) ? 'occupied' : ''} 
          ${selectSeat.includes(seatId) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatId)} 
        ></div>
        {isAfterFirstThree && <div className="spacerCol"></div>}
        {isAfterFourth && <div className="spacerCol"></div>}
      </React.Fragment>
    );
  })
);





  return (
    <>
    <Header/>

      <div className='mt-5 pt-5'>
        <Container>
          <h3 className='fw-bolder text-center mt-4'>Book Your Seats</h3>

          <div className='mt-3'>
            <Row class="showcase">
              <Col></Col>
              <Col>
                <Row className='idnt py-2'>
                  <Col className='d-flex ps-4'>
                    <div className="seat NA"></div>
                    <small className='mt-2 ms-2'>N/A</small>
                  </Col>
                  <Col className='d-flex pe-4'>
                    <div className="seat selected"></div>
                    <small className='mt-2 ms-2'>Selected</small>
                  </Col>
                  <Col className='d-flex'>
                    <div className="seat occupied"></div>
                    <small className='mt-2 ms-2'>Occupied</small>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </div>

          <div className='innerdiv mt-4'>
          <Row>
            <Col>
              <div>
                <p className="movie-screen"></p>
                <p className='screennn'>Screen</p>
              </div>

              <div className="d-flex mt-4">
                <div className="seatno fw-bolder">1</div>
                <div className="seatno fw-bolder">2</div>
                <div className="seatno fw-bolder">3</div>
                <div className="seatno fw-bolder">4</div>
                <div className="seatnog fw-bolder">5</div>
                <div className="seatno fw-bolder">6</div>
                <div className="seatno fw-bolder">7</div>
                <div className="seatno fw-bolder">8</div>
                <div className="seatnog fw-bolder">9</div>
                <div className="seatno11 fw-bolder">10</div>
                <div className="seatno11 fw-bolder">11</div>
                <div className="seatno11 fw-bolder">12</div>
              </div>
              
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((row, index) => (
                  <React.Fragment key={row}>
                    <div className="d-flex mt-2">
                      <div className='fw-bolder mt-1'>{row}</div>
                      {renderSeats(row)}
                    </div>
                    {(index === 2 || index === 6) && <div className="spacer"></div>}
                    {(index === 2) &&  <h5 className='subtitle'>Silver - ₹300</h5>}
                    {(index === 6) &&  <h5 className='subtitle'>GOLD - ₹450</h5>}
                    {(index === 9) &&  <h5 className='subtitle mt-2'>DIAMOND - ₹650</h5>}
                  </React.Fragment>
                ))}

            </Col>

            <Col>
              <div className="finalSection">
                <h3>{initialTheater}</h3>
                <input type="date" min={minDate} max={maxDate} value={selectedDate} onChange={handleDateChange} className='form-control w-75 mt-3' />
                <div className='mt-4 w-75'>
                 <Form.Select aria-label="Default select example" value={selectedTime} onChange={handleTimeChange}>
                    <option>10AM - 12PM</option>
                    <option>2PM - 4PM</option>
                    <option>5PM - 7PM</option>
                    <option>9PM - 11PM</option>
                  </Form.Select>
                </div>
                <p className="text mt-4 fs-5">Selected Seats: <span id='count'>{selectSeat.length > 0 ? selectSeat.join(', ') : 0}</span></p>
                <p className="text fs-5">Total Price:<span id="total">₹ {totalPrice}</span></p>
                <div className='mt-4'>
                  <button onClick={handleSeatsBooking} className='btn btn-warning text-dark fw-bolder'>Procced to Pay</button>
                </div>
              </div>
            </Col>
          </Row>
          </div>

        </Container>
      </div>

    </>
  )
}

export default Booking