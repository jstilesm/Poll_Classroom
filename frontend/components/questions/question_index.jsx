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
                <button className="create-question" onClick={this.props.openModal}>Create</button>
                
                <div className="main-page">
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

