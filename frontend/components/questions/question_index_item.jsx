import React from 'react';
import {Link} from 'react-router-dom'

const QuestionIndexItem = ({question, deleteQuestion}) => {
    return (
        <>  
        <Link to={`/questions/${question.id}/edit`}>Edit</Link>
        <button onClick={() => deleteQuestion(report.id)}></button>
        </>
    )
}

export default QuestionIndexItem;