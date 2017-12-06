// @flow
import React from 'react'
import City from './components/City'

type _Props = {};

class Home extends React.Component<_Props> {
  render() {
    return (
        <div className="container row">
          <div className="col">
            <City id={1} state="request" name="Nombre Ciudad" temperature={25}/>
          </div>
          <div className="col">
            <City id={2} state="success" name="Nombre Ciudad" temperature={25}/>
          </div>
          <div className="col">
            <City id={3} state="fail"    name="Nombre Ciudad" />
          </div>
          <div className="col">
            <City id={4} state="fail"    name="Nombre Ciudad" error="error message"/>
          </div>
        </div>
    );
  }
}

export default Home
