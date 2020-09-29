import React from 'react';
import {Link} from 'react-router-dom'

const QuestionIndexItem = ({question, deleteQuestion}) => {
    
    return (
        <> 
            
        <div className="question-item">
            <h1>{question.title}</h1>
            
                <div className="drop-downbutton">
                    <a className="dropdown-icon" href="#"><i class="fas fa-ellipsis-v"></i></a>
                    <ul className="dropdown-menu">
                        <li><Link to={`/questions/${question.id}/edit`}>Edit</Link></li>
                        <li><a href="#">Duplicate</a></li>
                        <button onClick={() => deleteQuestion(question.id)}>Delete</button>
                        {/* <li class="divider"></li> */}
                    </ul>
                </div>
            
        </div>
        
        </>
    )
}

export default QuestionIndexItem;