
import React from 'react';
import axios from "axios";

import FileBase64 from './react-file-base64.js';

class Base64 extends React.Component {

  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  getFiles(files){
    this.setState({ files: files })
  }

  onSubmit () {

    let base64Con = ''
    let output= ''
    if (this.state.files[0]){
      base64Con = this.state.files[0].base64
      output = base64Con.split(",");

      // console.log('output', output[1])

      let prediction_result = ''
        const URL = 'http://127.0.0.1:5000/api/prediction'
        const request = {
          "base64Con" : output[1]
        }
        // let response = ''

        axios
            .post(URL, request)
            .then((res) => {
              console.log('res', res.data)
              this.setState((prev)=> {
                return (
                  {
                    ...prev,
                    prediction_result : res.data
                  }
                )
              })
              console.log('stete', this.state)
            })
            .catch((err) => {
                console.log('diagnosis-res', err)
            })
    }
  }

  render() {

    
    



    return (
      <div className="container">
        <div className = "container" style = {{marginTop : 100}}>
      
      <div className = 'center'>

        <h1 className="text-center">Predict your case using your mamogram</h1>

        <div className="text-center mt-25">
          <p className="text-center">Try To Upload Some Image</p>
          <FileBase64
            multiple={ true }
            onDone={ this.getFiles.bind(this) } />
        </div>

        <div className="text-center">
          { this.state.files.map((file,i) => {
            return <img key={i} src={file.base64} />
          }) }
          <img src="" />
        </div>
        { this.state.files[0] &&
          
          this.onSubmit()
          
        }
        {/* { this.state.files.length != 0 ?
          <div>
            <h3 className="text-center mt-25">Callback Object</h3>
            <div className="pre-container">
              <pre>{ JSON.stringify(this.state.files, null, 2) }</pre>
            </div>
          </div>
        : null } */}
            </div>

      </div>
      <div style = {{marginTop : 100}}></div>
      </div>
    )

  }

}



export default Base64