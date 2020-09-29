import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom'
import Dropdown from '../dropdown/dropdown'


class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {status: this.props.question.closed};
        this.update = this.update.bind(this)
    }
    
    update() {
        // console.log(this.state.status)
        this.setState({status: !this.state.status});
    }
    
    render() {
        let status;
        if (this.state.status) {
            status = "Deactivate";
            } else {
            status = "Activate";
        }
        
        // debugger
        return (
            <>

                <div className="question-item">
                    {this.props.question.kind === "mult_response" ? <div className="mult_choice"></div> : <i className="text fas fa-align-left"></i>}
                    <h1>{this.props.question.title}</h1>
                    <a className="activated" onClick={this.update}>{status}</a>
                    <Dropdown question={this.props.question} deleteQuestion={this.props.deleteQuestion} />


                </div>

            </> 
        )
    }
}

export default QuestionIndexItem;