import React from "react";
import { Link,useParams } from "react-router-dom";
import "./App.css";

const Answer = ({ match }) => {
  const { id } = useParams();

  return (
    <div className="ans-box">
      <h2>Final Answer</h2>
      {id < 3 ? (
        <p>
          Sorry, you can't see the answer yet. Try solving the question first!
        </p>
      ) : (
        <p>
          Go Back from Where you Have started
        </p>
      )}
      {id < 3 && (
        <Link to={`/question/${Number(id) + 1}`}>Go back to question</Link>
      )}
      <div className="imgbox">
      <img src="https://media.tenor.com/CBOjsCUCFOUAAAAM/jhonny-sins-reyiz-wink.gif" alt="gif"></img>
      </div>
    </div>
  );
};

export default Answer;
