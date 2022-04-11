import { Component } from 'react';
import '../App.css';

function Home() {
  return (
    <div className="Home">
      <h1>Enter details to get approval chance for the application</h1>
      <JsonForm></JsonForm>
    </div>
  );
}

export default Home;


class JsonForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            Gender: "Male",
            Married: "NO",
            Dependents: 0,
            Education: "Graduate",
            SelfEmployed:"No",
            ApplicantIncome: 230,
            CoapplicantIncome: 220,
            LoanAmount:100,
            LoanAmountTerm: 360,
            CreditHistory: 1,
            PropertyArea:"Urbanization",
            score:1
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        console.log(event.target.names)
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        const url = "http://localhost:8000/scoreJson"
        const bodyData = JSON.stringify({"Gender": this.state.Gender	
        ,"Married":this.state.Married
        ,"Dependents": this.state.Dependents
        , "Education": this.state.Education
        ,"Self_Employed": this.state.SelfEmployed
        ,"ApplicantIncome": this.state.ApplicantIncome
        , "CoapplicantIncome": this.state.CoapplicantIncome
        ,"LoanAmount": this.state.LoanAmount
        , "Loan_Amount_Term": this.state.LoanAmountTerm
        ,"Credit_History": this.state.CreditHistory
        ,"Property_Area": this.state.PropertyArea
    }
        )
        const reqOpt = {method: "POST",  headers: {"Content-type": "application/json"},  body: bodyData}
        fetch(url,reqOpt)
        .then((resp) => resp.json())
        .then((respJ) => this.setState({score: respJ.score}))
    }

    render(){
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Gender</td>
                                <td>
                                <input type="text" name='Gender' value={this.state.Gender} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Married</td>
                                <td>
                                <input type="text" name='Married' value={this.state.Married} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Dependents</td>
                                <td>
                                <input type="text" name='Dependents' value={this.state.Dependents} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Education</td>
                                <td>
                                <input type="text" name='Education' value={this.state.Education} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>SelfEmployed</td>
                                <td>
                                <input type="text" name='SelfEmployed' value={this.state.SelfEmployed} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>ApplicantIncome</td>
                                <td>
                                <input type="text" name='ApplicantIncome' value={this.state.ApplicantIncome} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>CoApplicantIncome</td>
                                <td>
                                <input type="text" name='CoApplicantIncome' value={this.state.CoApplicantIncome} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>LoanAmount</td>
                                <td>
                                <input type="text" name='LoanAmount' value={this.state.LoanAmount} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>LoanAmountTerm</td>
                                <td>
                                <input type="text" name='LoanAmountTerm' value={this.state.LoanAmountTerm} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>CreditHistory</td>
                                <td>
                                <input type="text" name='CreditHistory' value={this.state.CreditHistory} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>PropertyArea</td>
                                <td>
                                <input type="text" name='PropertyArea' value={this.state.PropertyArea} onChange={this.handleChange}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit"></input>
                </form>
            </div>
            <div>
                <h3>
                The probability of getting the approval for the loan is {this.state.score}
                </h3>
            </div>
            </>
        )
    }
}