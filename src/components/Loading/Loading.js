  
import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader';


export default class Loading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: props.text
    }
  }


  render() {
    return (
      <div className="body-content">
        <div className="loading">
          <BeatLoader
            sizeUnit={"px"}
            size={100}
            color={'#3577a2'}
            loading={this.state.loading}
          />
        </div>
      </div>
    )
  }
}