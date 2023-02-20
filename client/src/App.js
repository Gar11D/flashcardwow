import React, {useState} from "react";
import FlashcardList from "./FlashcardList";
import './app.css';

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <FlashcardList flashcards={flashcards} />
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    front: 'what is the capital of Spain?',
    back: 'Madrid'
  },
  {
    id: 2,
    front: 'what is the capital of France?',
    back: 'Paris'
  },
  {
    id: 3,
    front: 'what is the capital of Germany?',
    back: 'Berlin'
  }
]

export default App;
