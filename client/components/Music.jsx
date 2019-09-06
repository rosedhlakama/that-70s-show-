import React, {Component} from 'react'




class Music extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true
        }
    this.url="soundFiles/gimmeGimmeGimme.mp3"
    this.audio = new Audio(this.url)

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    }
    play(){
        this.setState({
          play: true,
          pause: false
        });
        console.log(this.audio);
        this.audio.play();
    }
    pause(){
        this.setState({ play: false, pause: true })
          this.audio.pause()
    
}   render() {

    return (
      <div id='musicButtons'>
        <button class="btn1" onClick={this.play}></button>
        <button class="btn2" onClick={this.pause}></button>
      </div>
      );
    }
  }
  
  
  export default Music