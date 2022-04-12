import React from 'react'

function Invest() {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <input type="text" name="from" />
                <input type="text" name="reciver" />
                <input type="number" name="amount" />
                <Link to="https://crust-demo.herokuapp.com/"> <button >Upload image</button> </Link>
                <input type="text" name="img_link" />
                <button  >Submit</button>
            </form>
        </div>
    )
}

export default Invest