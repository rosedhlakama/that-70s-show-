import React from 'react'
import { getImage } from '../apiClient'

class ButtonTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ''
        }
    }

    componentDidMount() {
        getImage()
            .then(res => {
                console.log(res)
                this.setState({ image: res.body.image })
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.image} height='70%' width='80%'/>
            </div>

        )


    }

}

export default ButtonTwo