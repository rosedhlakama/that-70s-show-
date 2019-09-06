import React from 'react'

// import { getFruits } from '../apiClient'

import ChannelZero from "./Channel0"
import ChannelOne from "./Channel1"
import ChannelTwo from "./Channel2"
import ChannelThree from "./Channel3"
import ChannelFour from "./Channel4"


class TV extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      channel: 0
    }
}

//  componentDidMount () {
//     getFruits()
//       .then(fruits => {
//         this.setState({fruits})
//       })
//   } 

  selectComponent = (event) => {
    this.setState({
      channel: event.target.value
    })
  }

  render () {
    return (
      <React.Fragment>
        <div id="screen">
          {this.state.channel == 0 && <ChannelZero />}
          {this.state.channel == 1 && <ChannelOne />}
          {this.state.channel == 2 && <ChannelTwo />}
          {this.state.channel == 3 && <ChannelThree />}
          {this.state.channel == 4 && <ChannelFour />}
        </div>
        <div id="buttons">
          <div id="channels">
          <input type="radio" name="button" value="1" onClick={this.selectComponent} />
          <input type="radio" name="button" value="2" onClick={this.selectComponent} />
          <input type="radio" name="button" value="3" onClick={this.selectComponent} />
          <input type="radio" name="button" value="4" onClick={this.selectComponent} />
          </div>
          <div id="on-off">
            {/* <button id="on-off-button"></button> */}
          </div>
        </div>

        
      </React.Fragment>
    )
  }
}

export default TV
