// --
// Dependencies
import React from 'react';


// --
// WrongLetters Component
const WrongLetters = ({ wrongLetters }) => {

    // Render Wrong Letters
    const renderLetters = () => {
        return wrongLetters.map(( letter, index ) => {
            return (
                <span key={ index }>
                    { letter }
                </span>
            ); 
        })
    }

    // Render Component
    return (
        <div className="wrong-letters-container">
            <div>
                { 
                    wrongLetters.length > 0 ? 
                        <p>
                            Wrong
                        </p> 
                    : '' 
                }

                { renderLetters() }
            </div>
        </div>
    );
}


export default WrongLetters;