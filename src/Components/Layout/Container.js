import React from 'react';

const Container = ({children}) =>{

    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            {children}
        </div>
    );
    
}

export default Container;