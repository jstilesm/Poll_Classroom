import React from 'react'
// import { update } from '../../util/api_util_session';
import QuestionForm from './question_form';

class EditQuestionForm extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.requestQuestion(this.props.match.params.questionId);
    }


    render() {
        const { action, question, formType} = this.props;
        if (!question) return null;
        return (
            <QuestionForm 
            action={action} 
            question={question} 
            formType={formType}/>
        )
    }
}


export default EditQuestionForm;