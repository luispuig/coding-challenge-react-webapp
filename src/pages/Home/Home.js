// @flow
import React from 'react'
import City from './components/City';

type _Props = {};

class Home extends React.Component<_Props> {
  render() {
    return (
        <div className="container row">
          <div className="col">
            <City id={1} name="City Name" state="request" />
          </div>
          <div className="col">
            <City id={1} name="City Name" state="success" temperature={25} />
          </div>
          <div className="col">
            <City id={1} name="City Name" state="fail"  />
          </div>
          <div className="col">
            <City id={1} name="City Name" state="fail" error="error message"/>
          </div>
        </div>
    );
  }
}

export default Home
