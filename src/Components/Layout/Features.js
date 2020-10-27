import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = (props) =>{
    return(
        <div className="flex flex-col text-center w-full md-w-1/3 mx-auto p-4">
            <div className="text-custom-orange mb-4">
                <FontAwesomeIcon icon={props.icon} size="3x" />
            </div>
            <div>
                <h6 className="text-lg text-custom-blue">{props.title}</h6>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Features;