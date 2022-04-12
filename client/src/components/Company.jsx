import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

function Company() {
    return (<>
        <Navbar />
        <div className='company-body'>
            <div className='company'>
                <div className='info'>
                    <div>
                        <div style={{ marginTop: '10px' }}> <b>  Organisation Name:</b> ABC-Co</div>
                        <div style={{ marginTop: '10px' }}> <b>Owner Name:</b> Tom Radder</div>
                        <div style={{ marginTop: '10px' }}> <b>Posted On:</b> 15-02-2022 </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>

                </div>
                <div className='desc'>
                    <b>Organisation Details: </b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim quod excepturi vel expedita maiores consequatur nobis autem deserunt consequuntur in quo nostrum vero quisquam accusamus, ad asperiores rerum sit!

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>

                        <h3 style={{ marginRight: '50px' }}>Credibility: 90% </h3>

                        <Link to="/invest"> <button className='invest-btn'>Invest</button> </Link>
                    </div>

                </div>

            </div>
        </div>
    </>)
}

export default Company