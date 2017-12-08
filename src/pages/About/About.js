// @flow
import React from 'react'

type _Props = {};

class About extends React.Component<_Props> {
  render() {
    return (
        <div>
          <p>ReactJS Test made by Luis Puig</p>
          <p><b>Repository: </b><a href="https://github.com/luispuig/altran/" target="_blank">https://github.com/luispuig/altran/</a></p>
          <p><b>Test coverage report (100%): </b><a href="https://luispuig.com/altran/test/" target="_blank">https://luispuig.com/altran/test/</a></p>
          <p><b>Flow coverage report (99%): </b><a href="https://luispuig.com/altran/flow/" target="_blank">https://luispuig.com/altran/flow/</a></p>
        </div>
    );
  }
}

export default About
