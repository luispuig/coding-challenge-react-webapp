// @flow
import React from 'react'
import City from './components/City';

type _Props = {};

const  temperatures = [
  {id:3936456,  temperature:15.45,  date: new Date('2017-12-06T10:57:16.462Z')},
  {id:3448439,  temperature:22.06,  date: new Date('2017-12-06T10:57:16.449Z')},
  {id:3871336,  temperature:12,     date:new Date('2017-12-06T10:57:16.438Z')}
];


class Home extends React.Component<_Props> {
  render() {
    return (
        <div className="container row">
          <div className="col">
            <City id={1} name="City Name" state="request" temperatures={[]}/>
          </div>
          <div className="col">
            <City id={1} name="City Name" state="success" temperature={25} temperatures={temperatures}/>
          </div>
          <div className="col">
            <City id={1} name="City Name" state="fail"  temperatures={[]}/>
          </div>
          <div className="col">
            <City id={1} name="City Name" state="fail" error="error message" temperatures={temperatures}/>
          </div>
        </div>
    );
  }
}

export default Home
