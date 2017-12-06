// @flow
import * as React from "react";

import Spinner  from "react-activity/lib/Spinner/";
import "react-activity/lib/Spinner/Spinner.css";

import "./City.css";

type _Props = {
  id: number,
  name: string,
  temperature?: number,
  state: "request" | "success" | "fail",
  error?: string,
};

class City extends React.Component<_Props> {

  _renderTemperature = () => {
    const {state, temperature} = this.props;
    switch(state) {
      case "request": // Loading
        return <Spinner />;

      case "success":
        if(temperature === undefined) return null;
        return ( <div>{ Math.round(temperature) }
              &nbsp;<span className="unit">ºC</span>
            </div>
        );

      case "fail":
        return <div className="error">X</div> ;

      default:
        return null;
    }
  };


  render() {
    const { name, state, error, temperatures } = this.props;
    return (
        <div className="_City card elevation-1 elevation-hover">
          <div className="card-body card-img-top bg_color_main _CardBody">
            <div className="frame-temperature">
              <div className="temperature elevation-2 text_color_dark">
                { this._renderTemperature() }
              </div>
            </div>
            <div className="card-title">{name}</div>
          </div>
          <div className="list-group list-group-flush list-temperatures">
            {
              // Check and show error message
              (state === "fail") && error &&
              <li className="list-group-item error">
                {error}
              </li>
            }
          </div>
        </div>
    );
  }
}

export default City;
