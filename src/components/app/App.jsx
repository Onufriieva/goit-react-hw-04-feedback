import {ContainerApp} from './AppStyled';
import Section from "../section/Section";
import Statistics from '../statistics/Statistics';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Notification from '../notification/Notification';
import { useState } from 'react';
 

export function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



 const handleIncrement = (feedbackName) => {
  switch(feedbackName) {
    case "good":
      return setGood((prev) => prev + 1);
    case "neutral":
      return setNeutral((prev) => prev + 1); 
    case "bad":
      return setBad((prev) => prev + 1); 
      default:
        return;
  }
  }; 


  const calculateTotal = () => {
    return good + neutral + bad;
  };

  const countPercentage= () => {
    const total = calculateTotal();
    return Math.round((good * 100) / total);
  }


  const options = ['good', 'neutral', 'bad'];


  return (
    <ContainerApp>
      <Section title="Please leave feedback">        

      <FeedbackOptions
      onBtnClick={handleIncrement}
      options = {options} 
       /> 


      {calculateTotal() === 0 ? <Notification message="There is no feedback"/> : 
      <Statistics
      goodValue={good}
      neutralValue={neutral}
      badValue={bad}
      total={calculateTotal()}
      percentage={countPercentage()}
      /> 
      }

      </Section>
    </ContainerApp>
  )
}
