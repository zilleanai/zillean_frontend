import React from 'react'
import { compose } from 'redux'

import './infobox.scss'

class InfoBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div className='infobox'>
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          });
        }}>
          {this.state.show ? '< ?' : '? >'}
        </button>
        {
          this.state.show && <div id='content'>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

export default compose(
)(InfoBox)
