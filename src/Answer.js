import React from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";

const Answer = ({ match }) => {
  const { id } = useParams();
  
  function getRandomNumberFromList(list) {
    // Generate a random index within the list length
    const randomIndex = Math.floor(Math.random() * list.length);

    // Return the corresponding number from the list
    return list[randomIndex];
  }

  // Get the provided list
  const answerList = [
    4928, 7651, 2384, 6190, 3472, 5086, 1247, 8935, 6703, 3159, 4826, 7594,
    2068, 9347, 5712, 3801, 6942, 1275, 8394, 5460,
  ];

  // Generate and display the random number
  const randomNumber = getRandomNumberFromList(answerList);
  console.log("Your random number:", randomNumber);

  

  return (
    <div className="ans-box">
      <h2>Final Answer</h2>
      {id < 3 ? (
        <p>
          Sorry, you can't see the answer yet. Try solving the question first!
        </p>
      ) : (
        <p>
          Where the echo of bouncing spheres meets the halls of thought,
          <br /> A lion's gaze, multidisciplinary wisdom sought. <br /> In the
          nexus of structures and legal creed, <br /> This feline guardian
          stands, where paths of knowledge feed. <br /> <br /> Not a stone's
          throw from where basketball dreams take flight, <br /> Navigate wisely to unlock the statue's insight. <br /> A convergence
          of laws, designs, and scholarly might, Decipher the riddle, unveil the
          king's site.
        </p>
      )}
      {id < 3 && (
        <Link to={`/question/${Number(id) + 1}`}>Go back to question</Link>
      )}
      {id >= 3 && (
        <p>
          Note is your personalized code: <span>{randomNumber}</span>
        </p>
      )}
      <div className="imgbox answerimg">
        <img
          src="https://media.tenor.com/CBOjsCUCFOUAAAAM/jhonny-sins-reyiz-wink.gif"
          alt="gif"
          width={145}
        ></img>
      </div>
    </div>
  );
};

export default Answer;
