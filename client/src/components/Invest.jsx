import React from 'react'
import Navbar from './Navbar';
function Invest() {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <Navbar />
            <div className='invest_body'>
                <form >
                    <h2>Invest</h2>
                    <input type="text" name="from" placeholder='from' />
                    <input type="text" name="reciver" placeholder='reciver' />
                    <input type="number" name="amount" placeholder='amount' />
                    <button> <a href="https://crust-demo.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: 'blue', textDecoration: "none" }}> Upload image </a></button>
                    <input type="text" name="img_link" placeholder='img_link' />
                    <button  >Submit</button>
                </form>
            </div>
        </div >
    )
}

export default Invest