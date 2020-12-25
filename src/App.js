import { useState } from "react";
import "./App.css";

function App() {  
  let randomQuestions = [
    {
      question: "Who is the president of Nigeria?",
      optionOne: "Goodluck",
      optionTwo: "Osho",
      optionThree: " Kingsley",
      optionFour: "Buhari",
      answer: "Buhari",
      congrat: "",
      id: 1,
      progress: "0%",
    },

    {
      question: "Who is the wife of the president of Nigeria?",
      optionOne: "Amaka",
      optionTwo: "Aisha",
      optionThree: "Funke",
      optionFour: "Gbemi",
      answer: "Aisha",
      congrat: "",
      id: 1,
      progress: "0%",
    },

    {
      question: "Who is the president of CBN?",
      optionOne: "Fred",
      optionTwo: "Micheal",
      optionThree: "Emefiele",
      optionFour: "Makr",
      answer: "Emefiele",
      congrat: "",
      id: 1,
      progress: "0%",
    },

    {
      question: "Who is the vice president of Nigeria?",
      optionOne: "Osibanjo",
      optionTwo: "Omoyami",
      optionThree: "Stanley",
      optionFour: "Sanwolu",
      answer: "Osibanjo",
      congrat: "",
      id: 2,
      progress: "0%",
    },
  ];

  const [paper, setPaper] = useState(
    randomQuestions[Math.floor(Math.random() * 4)]
  );

  let succesMsg = [
    "WOW you are very good!",
    "I admire your wisdom!",
    "Congrats you nailed it!",
    "Splendid!",
  ];
  let failureMsg = [
    "Olodo try again",
    "Ooops wrong answer try again",
    "We tink you're wrong",
    "Be like you go return to primary school oo",
  ];

  let randomMsg = Math.floor(Math.random() * 4);

  const correctAnswer = (e) => {
    if (e.target.firstChild.data === paper.answer) {
      setPaper({ ...paper, congrat: succesMsg[randomMsg], progress: "100%" });

      
      setTimeout(() => {
        e.preventDefault()
        setPaper(randomQuestions[Math.floor(Math.random() * 4)]);
      }, 2000);
    } else {
      setPaper({
        ...paper,
        congrat: failureMsg[randomMsg],
      });
    }
  };

  function nextQuestion() {
    setPaper(randomQuestions[Math.floor(Math.random() * 4)]);
  }

  return (
    <div className="container customCss pb-3">
      <nav className="navbar navbar-light justify-content-between">
        <h1 className="text-center">Let's Go?</h1>
        <button
          className="btn btn-outline-info my-2 my-sm-0"
          type="submit"
          onClick={nextQuestion}
        >
          Next
        </button>
      </nav>

      <div className="progress" style={{ height: "3px", marginTop: "30px" }}>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: `${paper.progress}` }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h1 className="text-center mt-5">{paper.question}</h1>
      <div className="row d-flex justify-content-around p-3 mt-5">
        <button
          className="btn btn-primary col-md-4 "
          onClick={(e) => {
            correctAnswer(e);
          }}
        >
          {paper.optionOne}
        </button>
        <button
          className="btn btn-warning col-md-4 mt-2"
          onClick={(e) => {
            correctAnswer(e);
          }}
        >
          {paper.optionTwo}
        </button>
      </div>

      <div className="row d-flex justify-content-around p-3">
        <button
          className="btn btn-success col-md-4"
          onClick={(e) => {
            correctAnswer(e);
          }}
        >
          {paper.optionThree}
        </button>
        <button
          className="btn btn-danger col-md-4 mt-2"
          onClick={(e) => {
            correctAnswer(e);
          }}
        >
          {paper.optionFour}
        </button>
      </div>

     
        <p className="text-center mt-5" style={{ color: "white", fontSize: '40px' }}>
          {paper.congrat}
        </p>
    
    </div>
  );
}

export default App;
