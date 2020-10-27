import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Container from './Layout/Container'
const Form =()=>{
    const [value, setValue] = useState('');
    const regx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return(
        <Container>
            <div className="max-w-xl mx-auto text-center flex flex-col">
                <form>
                    <div className="mb-4">
                        <h2 className="text-2xl text-custom-blue">If you would like to learn more, sign up below:</h2>
                    </div>
                    <div>
                        <input className="rounded-xl border shadow px-4 py-2 mb-2 w-2/3" 
                            type="text" 
                            placeholder="email@email.com" 
                            name="email" value={value} 
                            onChange={e=>setValue(e.target.value)}/>
                    </div>

                    <br />
                    {value === null || value === undefined || value === '' ||  !value.match(regx) ? 
                        <>
                            <div className="bg-gray-300 w-1/3 text-white uppercase rounded-xl shadow mx-auto px-4 py-2">
                                Sign Up
                            </div>
                            <p className="mt-2 text-red-400">Please enter a valid email address.</p>
                        </>
                        :
                            <Link to="/confirmation">
                                <div className="bg-custom-orange w-1/3 hover:cursor-pointer hover:bg-custom-ltorange text-white uppercase rounded-xl shadow mx-auto px-4 py-2">
                                    Sign Up
                                </div>
                            </Link>
                    }
                  
                </form>
            </div>
        </Container>
    )
}

export default Form;