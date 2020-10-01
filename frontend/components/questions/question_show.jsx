import React from 'react';
import {Link} from 'react-router-dom';


class QuestionShow extends React.Component {
    componentDidMount() {
        // debugger
        this.props.requestQuestion(this.props.match.params.questionId);
    }

    render() {
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
                        <button className="edit-button">Edit</button>
                        <button className="activate-button">Activate</button>
                        <button className="back-button">Back</button>
                    </div>
                </div>
            </div>


        )
    }
}


export default QuestionShow;