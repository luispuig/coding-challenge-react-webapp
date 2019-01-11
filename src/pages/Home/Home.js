// @flow
import React from "react";
import { connect } from "react-redux";
import { cityUpdateAll } from "../../redux/cities/actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import City from "./components/City";
import "./Home.css";

import type { _Temperature } from "../../redux/cities_temperatures/types";
import type { _City } from "../../redux/cities/types";
import type { _State } from "../../redux/types";
import type { Connector } from "react-redux";

type _Props = {
  actions: any,
  cities: Array<_City>,
  cities_temperatures: Array<_Temperature>,
  cityUpdateAll: () => void
};

const TICTIMER = 5 * 1000; // 5 seconds

class Home extends React.Component<_Props> {
  timer: number;

  componentDidMount() {
    // Start Fetching Data
    this.props.cityUpdateAll();

    // Create Timer
    this.timer = setInterval(() => {
      this.props.cityUpdateAll();
    }, TICTIMER);
  }

  componentWillUnmount() {
    // Destroy timer
    clearInterval(this.timer);
    this.timer = 0;
  }

  // Aux function to filter temperatures by city_id
  _filterCityTemperatures = id =>
    this.props.cities_temperatures.filter(item => item.id === id);

  render() {
    const { cities } = this.props;
    return (
      <div className="_Home container">
        <TransitionGroup className="row" appear={true}>
          {cities.map(city => (
            <CityEffect key={city.id}>
              <div className="col">
                <City
                  {...city}
                  temperatures={this._filterCityTemperatures(city.id)}
                />
              </div>
            </CityEffect>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

type CityEffect_Props = {
  children?: any
};
const CityEffect = ({ children, ...props }: CityEffect_Props) => (
  <CSSTransition {...props} timeout={15000} classNames="city">
    {children}
  </CSSTransition>
);

declare type MapStateToProps<SP: Object> = () => (() => SP) | SP;

declare type MapDispatchToProps<DP: Object> = (() => DP) | DP;

/*
declare function connect<SP, DP>(
  mapStateToProps: MapStateToProps<SP>,
  mapDispatchToProps: MapDispatchToProps<DP>,
): void;
*/

const mapStateToProps = ({
  cities,
  cities_temperatures
}: _State): MapStateToProps => ({
  cities,
  cities_temperatures
});

const mapDispatchToProps = (
  dispatch: any => void,
  props: _Props
): MapDispatchToProps => {
  return {
    cityUpdateAll: () => dispatch(cityUpdateAll()),
    ...props // Allow overwriting for testing porpuse
  };
};

const connector: Connector<{}, _Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Home);
