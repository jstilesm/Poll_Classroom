import React from 'react';
import {Link} from 'react-router-dom';


class QuestionShow extends React.Component {
    componentDidMount() {
        // debugger
        let number = this.props.match.params.questionId;
        this.props.requestQuestion(number);
    }

    render() {
        // debugger
        let number = this.props.match.params.questionId;
        // if (!isNaN(number)) {
        //     // debugger
        //     console.log(number);
        // } else {
        //     console.log("nowork");
        // }
        // debugger
        return (

            <div className="show-page">
                {/* <h1>Title</h1>
                <h1>{this.props.question.title}</h1>
                <h3>{this.props.question.kind}</h3>
                <p>{this.props.question.closed}</p>
                <p>{this.props.question.allow_unregistered}</p>
                <p>{this.props.question.response_limit}</p> */}
                <div className="grey-box">

                </div>
                {/* <Link to="/">Link</Link> */}
                <div className="white-box">
                    <div className="button-box">
                        <Link className="edit-button" to={`/questions/${number}/edit`}>Edit</Link>
                        <button className="activate-button">Activate</button>
                        <Link className="back-button" to="/questions/">Back</Link>
                    </div>
                </div>
            </div>


        )
    }
}


export default QuestionShow;