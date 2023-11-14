// --
// Dependencies
import React from 'react';


// --
// Word Component
const Word = ({ selectedWord, correctLetters }) => {

    // Render Letters
    const renderLetters = () => {
        return selectedWord.split('').map(( letter, index ) => {
            return (
                <span 
                    className="letter" 
                    key={ index }
                >
                    { correctLetters.includes( letter ) ? letter : '' }
                </span>
            );
        });

    }

    // Render Component
    return (
        <div className="word">
            { renderLetters() }
        </div>
    );
}


export default Word;