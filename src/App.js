import { useState } from "react";
import "./App.css";

function App() {
  const [paper, setPaper] = useState(
    {
      question: "Who is the president of Nigeria?",
      optionOne: "Goodluck",
      optionTwo: "Osho",
      optionThree: " Kingsley",
      optionFour: "Amechi",
      answer: 'Amechi',
      congrat: '',
      id:1
    },

    {
      question: "Who is the vice president of Nigeria?",
      optionOne: "kantara",
      optionTwo: "omoyami",
      optionThree: " stanley",
      optionFour: "sanwolu",
      answer: 'osibanjo',
      congrat: '',
      id:2
    }
  );



  const correctAnswer = (e, message)=>{
    e.preventDefault()
    if(e.target.firstChild.data === paper.answer){
      setPaper({ ...paper, congrat: message})
      console.log(paper.congrat, e.target.firstChild);
    }else{
      setPaper({
        ...paper, congrat: message
      })
      console.log(message);
    }
      
  }


  // const questionList = paper.map((val) =>{
  //     return
  // })
  return (
    <div className="container customCss pb-3">
      <nav className="navbar navbar-light justify-content-between">
        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
          Reset
        </button>
        <h1 className="text-center">Let's Go?</h1>
        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
          Next
        </button>
      </nav>

      <div className="progress" style={{ height: "3px", marginTop: "30px" }}>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h1 className="text-center mt-5">{paper.question}</h1>
      <div className="row d-flex justify-content-around p-3 mt-5">
        <button className="btn btn-outline-primary col-md-4 " onClick={(e)=>{correctAnswer(e, 'Olodo try again')}}>
         {paper.optionOne}
        </button>
        <button className="btn btn-outline-warning col-md-4 mt-2" onClick={(e)=>{correctAnswer(e, 'How far na')}}>
          {paper.optionTwo}
        </button>
      </div>

      <div className="row d-flex justify-content-around p-3">
        <button className="btn btn-outline-success col-md-4" onClick={(e)=>{correctAnswer(e, 'Nothing dey your head')}}>
          {paper.optionThree}
        </button>
        <button className="btn btn-outline-danger col-md-4 mt-2" onClick={(e)=>{correctAnswer(e, 'Correct answer')}}>
        {paper.optionFour}
        </button>
      </div>

      <p className="text-center mt-5" style={{color: 'white'}}>{paper.congrat}</p>

      



      <div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px"}}>
      <div className="toast" style={{position: "absolute", top: 0, right: 0}}>
      <div className="toast-header">
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>


    </div>



  );
}

export default App;
