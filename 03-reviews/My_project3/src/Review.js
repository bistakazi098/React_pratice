import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // here index is set to 0
  const [index, setIndex] = useState(0);
  console.log(people);
  // default first index value is passed here
  const { name, job, image, text } = people[index];

  // The function is used to loop or to avoid error
  const checkNumber=(number)=>{
    if (number>people.length-1){
      return 0;
    }
    if (number<0)
    {
      return people.length-1;
    }
    return number;
  };

  // when next arrow is passed than arrow is passed
  const nextperson=()=>{
    setIndex((index)=>{
      let newindex=index+1;
      return checkNumber(newindex);
    });
  }

  // for surprise me button
  const randomPerson =()=>{
let randomNumber= Math.floor(Math.random()*people.length);
// when same index is repeated many times
if(randomNumber==index)
{
 let randomNumber=index+1;
}
setIndex(checkNumber(randomNumber));
  };

  // it is used for previous button
  const prevPerson=()=>{
    setIndex((index)=>{
      let newindex=index-1;
      return checkNumber(newindex) ;
    });
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextperson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>suprise me</button>
    </article>
  );
};

export default Review;
