import React from 'react'
import Enzyme, {shallow, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './setup-env'

import App from '../../client/components/App'
import ChannelOne from '../../client/components/Channel1'
import ChannelZero from '../../client/components/Channel0'
import ChannelTwo from '../../client/components/Channel2'

App.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

describe('test <App/> event handling', () => {
  test('<App/> root has a className of TV', () => {
    const wrapper = shallow(<App />)
    const root = wrapper.find('#screen')
    expect(root.length).toBe(1)
  })
  test('on click screen image changes state changes', () => {
    let wrapper = shallow(<App />)
    let startingChannel = wrapper.find(ChannelZero)
    expect(startingChannel.length).toBe(1)

    let button = wrapper.find('#button1')
    button.simulate('click', { target: { value: 1 } })

    let nextChannel = wrapper.find(ChannelOne)
    startingChannel = wrapper.find(ChannelZero)
    expect(nextChannel.length).toBe(1)
    expect(startingChannel.length).toBe(0)
  })

})

