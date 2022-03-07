import './Tours.css';

//  task17 part

import Tour from './tour/Tour';
import { Link } from 'react-router-dom';

export default function Tours(props) {
  //taking data from props(key = tourData) from home 
  return (
    <div >
      {
        props.travelData.map(element => {
          return (
            <Link to={`/city/${element.id}`}>
            <Tour key={element.id} mydata3={element} />
            </Link>
          )
        })
      }
    </div>
  )
}