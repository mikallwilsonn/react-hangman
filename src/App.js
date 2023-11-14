// --
// Dependencies
import React, { useState, useEffect } from 'react';
import './index.css';


// --
// Child Components
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';


// --
// Helpers
import { showNotification as notify  } from './helpers/helpers';


// --
// App Component
const App = () => {
  const [ playable, setPlayable ] = useState( true );
  const [ words, setWords ] = useState([ 'application', 'programming', 'interface', 'wizard' ]);
  const [ selectedWord, setSelectedWord ] = useState( words[ Math.floor( Math.random() * words.length )] );
  const [ correctLetters, setCorrectLetters ] = useState([]);
  const [ wrongLetters, setWrongLetters ] = useState([]);
  const [ showNotification, setShowNotification ] = useState( false );

  useEffect(() => {
    const handleKeydown = ( event ) => {
      console.log( 'jeydown ' )
      const { key, keyCode } = event;

      if ( playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
  
        if ( selectedWord.includes( letter )) {
          if ( !correctLetters.includes( letter )) {
            setCorrectLetters( currentLetters => [ ...currentLetters, letter ]);

          } else {
            notify( setShowNotification );
          }
        } else {
          if ( !wrongLetters.includes( letter )) {
            setWrongLetters(wrongLetters => [ ...wrongLetters, letter ]);

          } else {
            notify( setShowNotification );
          }
        }
      }
      
    }

    window.addEventListener('keydown', handleKeydown );

    return () => window.removeEventListener( 'keydown', handleKeydown );
  }, [ correctLetters, wrongLetters, playable ]);


  const playAgain = () => {
    setPlayable( true );
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor( Math.random() * words.length );
    setSelectedWord( words[ random ]);
  }

  return (
    <div className="App">
      <Header />

      <div className="game-container">
        <Figure wrongLetters={ wrongLetters } />

        <WrongLetters wrongLetters={ wrongLetters } />

        <Word 
          selectedWord={ selectedWord }
          correctLetters={ correctLetters }
        />
      </div>

      <Popup 
        correctLetters={ correctLetters } 
        wrongLetters={ wrongLetters } 
        selectedWord={ selectedWord } 
        setPlayable={ setPlayable } 
        playAgain={ playAgain }
      />

      <Notification showNotification={ showNotification } />
    </div>
  );
}

export default App;
