import React from 'react';
import {Link} from 'react-router-dom';
import Container from './Layout/Container'


const Confirmation =()=>{

    return(
        <Container>
            <div className="max-w-xl mx-auto text-center flex flex-col">
                <div className="mb-2">
                    <h2 className="text-2xl text-custom-blue mb-4">
                        Thank you for submitting your email. 
                        <br />
                        We’ll be in contact with you soon.
                    </h2>
                    <Link to="/">
                        <button className="bg-custom-blue hover:bg-custom-ltblue uppercase rounded-xl shadow px-4 py-2 text-white">&larr; Back</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Confirmation;