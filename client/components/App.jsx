import React from 'react'

import { getFruits } from '../apiClient'

class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    getFruits()
      .then(fruits => {
        this.setState({fruits})
      })
  }

  render () {
    return (
      <div className='app'>
        <div id="screen"></div>
        <div id="buttons">
          <button type="submit" name="button" value="1">1</button>
          <button type="submit" name="button" value="2">2</button>
          <button type="submit" name="button" value="3">3</button>
          <button type="submit" name="button" value="4">4</button>
        </div>
      </div>
    )
  }
}

export default App
