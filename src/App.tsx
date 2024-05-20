import React from 'react';
import './App.css';
import Roots from './Roots/Roots';

function App() {
  return (
    <div className="App">
      <Roots/>
    </div>
  );
}

export default App;
















{/* <Col>
              <div>
                <p className="movie-screen"></p>
                <p className='screennn'>Screen</p>
              </div>

              <div className="d-flex mt-4">
                <div className="seatno fw-bolder">1</div>
                <div className="seatno fw-bolder">2</div>
                <div className="seatno fw-bolder">3</div>
                <div className="seatnog fw-bolder">4</div>
                <div className="seatno fw-bolder">5</div>
                <div className="seatno fw-bolder">6</div>
                <div className="seatno fw-bolder">7</div>
                <div className="seatno fw-bolder">8</div>
                <div className="seatnog fw-bolder">9</div>
                <div className="seatno11 fw-bolder">10</div>
                <div className="seatno11 fw-bolder">11</div>
              </div>
              <div className="d-flex">
                <div className='fw-bolder mt-1'>A</div>
                <div id='A1' className="seat ms-3"></div>
                <div id='A2' className="seat ms-2"></div>
                <div id='A3' className="seat ms-2"></div>
                <div id='A4' className="seat ms-5"></div>
                <div id='A5' className="seat ms-2"></div>
                <div id='A6' className="seat ms-2"></div>
                <div id='A7' className="seat ms-2"></div>
                <div id='A8' className="seat ms-2"></div>
                <div id='A9' className="seat ms-5"></div>
                <div id='A10' className="seat ms-2"></div>
                <div id='A11' className="seat ms-2"></div>
              </div>
              <div className="d-flex mt-2">
                <div className='fw-bolder mt-1'>B</div>
                <div id='B1' className="seat ms-3"></div>
                <div id='B2' className="seat ms-2"></div>
                <div id='B3' className="seat ms-2"></div>
                <div id='B4' className="seat ms-5"></div>
                <div id='B5' className="seat ms-2"></div>
                <div id='B6' className="seat ms-2"></div>
                <div id='B7' className="seat ms-2"></div>
                <div id='B8' className="seat ms-2"></div>
                <div id='B9' className="seat ms-5"></div>
                <div id='B10' className="seat ms-2"></div>
                <div id='B11' className="seat ms-2"></div>
              </div>
              <div className="d-flex mt-2">
                <div className='fw-bolder mt-1'>C</div>
                <div id='C1' className="seat ms-3"></div>
                <div id='C2' className="seat ms-2"></div>
                <div id='C3' className="seat ms-2"></div>
                <div id='C4' className="seat ms-5"></div>
                <div id='C5' className="seat ms-2"></div>
                <div id='C6' className="seat ms-2"></div>
                <div id='C7' className="seat ms-2"></div>
                <div id='C8' className="seat ms-2"></div>
                <div id='C9' className="seat ms-5"></div>
                <div id='C10' className="seat ms-2"></div>
                <div id='C11' className="seat ms-2"></div>
              </div>
              <h5 className='subtitle my-2'>Silver - ₹450</h5>
              <div className="d-flex">
                <div className='fw-bolder mt-1'>D</div>
                <div id='D1' className="seat ms-3"></div>
                <div id='D2' className="seat ms-2"></div>
                <div id='D3' className="seat ms-2"></div>
                <div id='D4' className="seat ms-5"></div>
                <div id='D5' className="seat ms-2"></div>
                <div id='D6' className="seat ms-2"></div>
                <div id='D7' className="seat ms-2"></div>
                <div id='D8' className="seat ms-2"></div>
                <div id='D9' className="seat ms-5"></div>
                <div id='D10' className="seat ms-2"></div>
                <div id='D11' className="seat ms-2"></div>
              </div>
              <div className="d-flex mt-2">
                <div className='fw-bolder mt-1'>E</div>
                <div id='E1' className="seat ms-3"></div>
                <div id='E2' className="seat ms-2"></div>
                <div id='E3' className="seat ms-2"></div>
                <div id='E4' className="seat ms-5"></div>
                <div id='E5' className="seat ms-2"></div>
                <div id='E6' className="seat ms-2"></div>
                <div id='E7' className="seat ms-2"></div>
                <div id='E8' className="seat ms-2"></div>
                <div id='E9' className="seat ms-5"></div>
                <div id='E10' className="seat ms-2"></div>
                <div id='E11' className="seat ms-2"></div>
              </div>
              <div className="d-flex mt-2">
                <div className='fw-bolder mt-1'>F</div>
                <div id='F1' className="seat ms-3"></div>
                <div id='F2' className="seat ms-2"></div>
                <div id='F3' className="seat ms-2"></div>
                <div id='F4' className="seat ms-5"></div>
                <div id='F5' className="seat ms-2"></div>
                <div id='F6' className="seat ms-2"></div>
                <div id='F7' className="seat ms-2"></div>
                <div id='F8' className="seat ms-2"></div>
                <div id='F9' className="seat ms-5"></div>
                <div id='F10' className="seat ms-2"></div>
                <div id='F11' className="seat ms-2"></div>
              </div>
              <h5 className='subtitle my-2'>GOLD - ₹650</h5>
              <div className="d-flex">
                <div className='fw-bolder mt-1'>G</div>
                <div id='G1' className="seat ms-3"></div>
                <div id='G2' className="seat ms-2"></div>
                <div id='G3' className="seat ms-2"></div>
                <div id='G4' className="seat ms-5"></div>
                <div id='G5' className="seat ms-2"></div>
                <div id='G6' className="seat ms-2"></div>
                <div id='G7' className="seat ms-2"></div>
                <div id='G8' className="seat ms-2"></div>
                <div id='G9' className="seat ms-5"></div>
                <div id='G10' className="seat ms-2"></div>
                <div id='G11' className="seat ms-2"></div>
              </div>
              <div className="d-flex mt-2">
                <div className='fw-bolder mt-1'>H</div>
                <div id='H1' className="seat ms-3"></div>
                <div id='H2' className="seat ms-2"></div>
                <div id='H3' className="seat ms-2"></div>
                <div id='H4' className="seat ms-5"></div>
                <div id='H5' className="seat ms-2"></div>
                <div id='H6' className="seat ms-2"></div>
                <div id='H7' className="seat ms-2"></div>
                <div id='H8' className="seat ms-2"></div>
                <div id='H9' className="seat ms-5"></div>
                <div id='H10' className="seat ms-2"></div>
                <div id='H11' className="seat ms-2"></div>
              </div>
              <div className="d-flex mt-2">
                <div className='fw-bolder mt-1'>I</div>
                <div id='I1' className="seat ms"></div>
                <div id='I2' className="seat ms-2"></div>
                <div id='I3' className="seat ms-2"></div>
                <div id='I4' className="seat ms-5"></div>
                <div id='I5' className="seat ms-2"></div>
                <div id='I6' className="seat ms-2"></div>
                <div id='I7' className="seat ms-2"></div>
                <div id='I8' className="seat ms-2"></div>
                <div id='I9' className="seat ms-5"></div>
                <div id='I10' className="seat ms-2"></div>
                <div id='I11' className="seat ms-2"></div>
              </div>
              <div className="d-flex mt-2">
                <div className='fw-bolder mt-1'>J</div>
                <div id='J1' className="seat mss"></div>
                <div id='J2' className="seat ms-2"></div>
                <div id='J3' className="seat ms-2"></div>
                <div id='J4' className="seat ms-5"></div>
                <div id='J5' className="seat ms-2"></div>
                <div id='J6' className="seat ms-2"></div>
                <div id='J7' className="seat ms-2"></div>
                <div id='J8' className="seat ms-2"></div>
                <div id='J9' className="seat ms-5"></div>
                <div id='J10' className="seat ms-2"></div>
                <div id='J11' className="seat ms-2"></div>
              </div>
              <h5 className='subtitle my-2'>DIAMOND - ₹850</h5>
            </Col> */}