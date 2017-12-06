// @flow
import React from 'react'
import City from './components/City';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import "./Home.css";

type _Props = {};

const  temperatures = [
  {id:3936456,  temperature:15.45,  date: new Date('2017-12-06T10:57:16.462Z')},
  {id:3448439,  temperature:22.06,  date: new Date('2017-12-06T10:57:16.449Z')},
  {id:3871336,  temperature:12,     date:new Date('2017-12-06T10:57:16.438Z')}
];


class Home extends React.Component<_Props> {
  render() {
    return (
        <div className="_Home container">
          <TransitionGroup className='row' appear={true}>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state="request" temperatures={[]}/>
              </div>
            </CityEffect>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state="success" temperature={25} temperatures={temperatures}/>
              </div>
            </CityEffect>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state="fail"  temperatures={[]}/>
              </div>
            </CityEffect>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state="fail" error="error message" temperatures={temperatures}/>
              </div>
            </CityEffect>
          </TransitionGroup>
        </div>
    );
  }
}

type CityEffect_Props = {
  children?: any,
};
const CityEffect = ({ children, ...props }:CityEffect_Props) => (
    <CSSTransition
        {...props}
        timeout={5000}
        classNames="city"
    >
      {children}
    </CSSTransition>
);

export default Home
