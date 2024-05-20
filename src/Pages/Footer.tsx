import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <div>
        <MDBFooter className='bgclr text-center'>
            <div className='text-center text-warning p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className='text-warning ms-1' href='/'>
                BookYourShow.com
                </a>
            </div>
        </MDBFooter>
    </div>
  )
}

export default Footer