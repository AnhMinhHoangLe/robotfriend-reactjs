import React from "react";
//using destructing here to allow us to grab 
//the props object and grab its properties. 
const SearchBox = ({ searchChange }) => {
    
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
                //the onchange event occurs when the value 
                // of an element has been changed.
            />
        </div>
    );
};
export default SearchBox;
