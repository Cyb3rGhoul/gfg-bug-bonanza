import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";


const questions = [
  {
    text: "What has keys but can't open locks?",
    answer: "keyboard" || "Keyboard",
    src: "https://i.pinimg.com/originals/c3/41/c4/c341c42ed3d33400dcce61471cafafa5.gif",
  },
  {
    text: "I have a gig, but I'm not a musician, I have a byte, but I am not a vampire`s nutrition. What am I?",
    answer: "Hard Drive" || "hard drive" || "Harddrive" || "harddrive",
    src: "https://media1.tenor.com/m/eiM9RLs-AeUAAAAC/shinchan-dance-shinchan.gif",
  },
  {
    text: "I'm a path in the digital space, not made of bricks or covered in lace. Alter me right, solve the mystery in sight, change the question to answer, to unveil the grace. What am I?",
    answer: ";ofdauovh aodoviedjvdsavonds vdfvdnvdnapvojdapfvo",
    src: "https://i.pinimg.com/originals/5f/16/09/5f1609b4b3e31e5f89841c7ee1142d0e.gif",
  },
];

const Question = ({ match }) => {
  const { id } = useParams();
  const question = questions[id - 1];
  const [userAnswer, setUserAnswer] = useState('');
  const navigate = useNavigate();

  const handleAnswerSubmit = () => {
    if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
      // Correct answer, redirect to the next question
      if (id < questions.length) {
        navigate(`/question/${Number(id) + 1}`);
      } else {
        navigate(`/answer/${id}`);
      }
    } else {
      // Incorrect answer, show an alert
      alert("Wrong answer! Try again.");
      setUserAnswer(""); // Clear the input field on incorrect answer
    }
  };

  return (
    <div className="question-box">
      <h2>Question {id}</h2>
      <p>{question.text}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleAnswerSubmit}>Submit Answer</button>
      <br />
      <div className="imgbox">
        <img
          src={question.src}
          alt="gif"
          width="200"
          height="200"
        />
      </div>
    </div>
  );
};

export default Question;
