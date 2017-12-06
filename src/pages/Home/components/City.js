// @flow
import * as React from "react";

import Spinner  from "react-activity/lib/Spinner/";
import "react-activity/lib/Spinner/Spinner.css";

import "./City.css";

type Temperature = {
  id: number,
  date: Date,
  temperature: number
};

type _Props = {
  id: number,
  name: string,
  state: "request" | "success" | "fail",
  temperature?: number,
  error?: string,
  temperatures: Array<_Temperature>
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

  // Aux function to format date dd/MM/yyyy HH:mm
  // TODO IMPROVE Move function to utils file
  _formatDate = (date:Date) => {
    const dd = ("00" + date.getDate()).slice(-2);
    const mm = ("00" + date.getMonth()).slice(-2);
    const yyyy = date.getFullYear();
    const _hh = ("00" + date.getHours()).slice(-2);
    const _mm = ("00" + date.getMinutes()).slice(-2);

    return `${dd}/${mm}/${yyyy} ${_hh}:${_mm}`;
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
            {
              temperatures.map( (item:_Temperature, index:number) =>
                  <li key={index} className="list-group-item">
                    <div className="row">
                      <div className="col-7 col-md-8">
                        {this._formatDate(item.date)}
                      </div>
                      <div className="col-5 col-md-4 text-right">
                        { Math.round(item.temperature) }
                        &nbsp;<span className="unit">ºC</span></div>
                    </div>
                  </li>
              )
            }
          </div>
        </div>
    );
  }
}

export default City;
