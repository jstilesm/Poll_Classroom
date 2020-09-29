import React from 'react';

import {Link} from 'react-router-dom';
import QuestionIndexItem from './question_index_item';



class QuestionIndex extends React.Component {
    componentDidMount() {
        this.props.requestQuestions(this.props.questions);
    }

    render() {
        debugger
        return(
            <>
                <ul>
                    {this.props.questions.map(question => <QuestionIndexItem question={question} deleteQuestion={this.props.deleteQuestion} />)}
                </ul>
                <Link to="/questions/new">New Question</Link>
            </>
        )
    }
}


export default QuestionIndex;

