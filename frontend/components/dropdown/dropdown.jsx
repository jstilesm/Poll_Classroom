import React from 'react';
import {Link} from 'react-router-dom';


class ClickDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.whenBlur = this.whenBlur.bind(this);
        this.whenFocus = this.whenFocus.bind(this);
    }
    whenBlur(e) {
        e.preventDefault();
       this.setState({show: false});
    }

    whenFocus(e) {
        e.preventDefault();
        this.setState({show: true});
    }
    render() {
        return (
            <div>
                <button className="threedots" onFocus={this.whenFocus} onBlur={this.whenBlur}>
                    <i className="actions fas fa-ellipsis-v">Actions</i>
                    {this.state.show ? (
                        <ul onClick={ e => console.log(e)}>
                            <div className="options-box">
                                <li className="delete-icon" onClick={() => this.props.deleteQuestion(this.props.question.id)}>
                                    <i class="fa fa-trash" aria-hidden="true">
                                    </i>Delete
                                </li>
                                <li className="edit-icon" onClick={e => e.stopPropagation()}>
                                    <Link className="edit-words" to={`/questions/${this.props.question.id}/edit`}>
                                        <i class="fas fa-pencil-alt"></i>Edit
                                    </Link>
                                </li>
                
                            </div>
                        </ul>
                    ) : null}
                </button>
            </div>
        )
    }
}

export default ClickDropdown;

