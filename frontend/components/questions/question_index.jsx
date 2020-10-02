import React from 'react';

import {Link} from 'react-router-dom';
import QuestionIndexItem from './question_index_item';



class QuestionIndex extends React.Component {
    componentDidMount() {
        // debugger
        this.props.requestQuestions();
        // debugger
    }

    render() {
        // debugger
        return(
            <>
                <div className="toprightbuttons">
                    <Link className="create-question" to="/questions/new">Create</Link>
                    <button className="import-question">Import</button>
                    <div className="greybar"></div>
                    <button className="activities-button">Activities</button>
                    <button className="trash-button">Trash</button>
                </div>
                <div className="main-index-page">
                        {/* <Link to="/questions/new">New Question</Link> */}
                        <ul className="questions-box">
                            {this.props.questions.map(question => <QuestionIndexItem key={question.id} question={question} deleteQuestion={this.props.deleteQuestion} />)}
    
                        </ul>
                </div>
            </>
        )
    }
}


export default QuestionIndex;

