// this file is to input the format of html
import React from "react";
const Card = ({ name, email, id }) => {
    return (
        <>
            <header className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </header>
        </>
    );
};
export default Card;
