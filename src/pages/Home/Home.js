// @flow
import React from 'react'
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import openWeather  from "../../services/openWeather";

import City from './components/City';
import "./Home.css";

import type { Connector } from "react-redux"
type _Props = {};
type _State = {
  state: string,
  temperature: number,
  error: number
};

const  temperatures = [
  {id:3936456,  temperature:15.45,  date: new Date('2017-12-06T10:57:16.462Z')},
  {id:3448439,  temperature:22.06,  date: new Date('2017-12-06T10:57:16.449Z')},
  {id:3871336,  temperature:12,     date:new Date('2017-12-06T10:57:16.438Z')}
];


class Home extends React.Component<_Props, _State> {

  state = {
    state: 'request',
    temperature: undefined,
    error: undefined
  };

  componentDidMount() {
    console.log(this.props);

    openWeather.getTempByCityId( 3936456 ).then(
        (temperature:number) => {
          this.setState({ state: 'success', temperature });
        },
        (error:{ message:string }) => {
          console.log(error.message);
        }
    );
  }

  render() {
    const { state, temperature, error } = this.state;
    return (
        <div className="_Home container">
          <TransitionGroup className='row' appear={true}>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state={state} temperature={temperature} error={error} temperatures={[]}/>
              </div>
            </CityEffect>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state={state} temperature={temperature} error={error} temperatures={temperatures}/>
              </div>
            </CityEffect>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state={state} temperature={temperature} error={error} temperatures={[]}/>
              </div>
            </CityEffect>
            <CityEffect>
              <div className="col">
                <City id={1} name="City Name" state={state} temperature={temperature} error={error} temperatures={temperatures}/>
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


const mapStateToProps = ({cities, cities_temperatures}:_State):MapStateToProps => ({
  cities,
  cities_temperatures
});


const connector:Connector<{}, _Props> = connect (
    mapStateToProps
);

export default connector(Home);
