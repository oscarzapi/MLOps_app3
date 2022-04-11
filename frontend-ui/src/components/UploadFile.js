import { Component } from 'react';
import '../App.css';

function UploadFile() {
  return (
    <div className="UploadFile">
      <h1>
          Batch Processing</h1>
      <UploadBatchFile></UploadBatchFile>
    </div>
  );
}

export default UploadFile;


class UploadBatchFile extends Component{
  constructor(props){
    super(props)

    this.state={
      selectFile:null,
      respFromServer:null,
      output: false
    }

    this.handleFile = this.handleFile.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleFile(event){
    console.log(event.target.value)
    this.setState({[event.target.name]:event.target.files[0]})
  }

  handleUpload = async event => {
    event.preventDefault()
    const url = "http://localhost:8000/scoreFile"
    const fileToSend = this.state.selectFile
    var formData = new FormData()
    formData.append('filePath', this.state.selectFile, this.state.selectFile.name)
    const reqOpt = {method:"POST", body:formData}

    const resp = await fetch(url, reqOpt)
    const resp2 = await resp.json()

    this.setState({respFromServer:resp2.result})
    this.setState({output:true})


  }

  render(){
    const iterData = this.state.respFromServer
    const checkPoint = this.state.output

    let tableData
    let finalTable
    if(checkPoint){

      tableData = iterData.map((x) => {
        return (
        <tr>
          <td>
            {x[0]}
          </td>
          <td>
            {x[1]}
          </td>
        </tr>)
        
      })
      finalTable = <table>
          <tbody>
            <tr>
              <td>
                Id
              </td>
              <td>
                Probability
              </td>
            </tr>
            {tableData}
          </tbody>
        </table>
    } else {
      tableData="No response"
    }

     

    
    return(
      <>
      <div>
        <form onSubmit={this.handleUpload}>
          <input type="file" name='selectFile' onChange={this.handleFile}></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
      <div>
      {finalTable}
      </div>
      </>
    )
  }
}