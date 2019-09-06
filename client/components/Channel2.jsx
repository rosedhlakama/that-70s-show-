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
                <img className='angela' src={this.state.image} />
            </div>

        )


    }

}

export default ButtonTwo