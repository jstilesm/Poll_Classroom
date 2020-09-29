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
        if (e.type !== 'focus') {
            this.setState({ show: true })
        } else {
            this.setState({ show: false })
        }
    }

    whenFocus(e) {
        e.preventDefault();
        if (e.type === 'focus') {
            this.setState({ show: true});
        } else {
            this.setState({show: false});
        }
    }
    render() {
        return (
            <div>
                <button className="threedots" onFocus={this.whenFocus} onBlur={this.whenBlur}>
                    <i className="fas fa-ellipsis-v"></i>
                    {this.state.show ? (
                        <ul className="threedots" onClick={ e => console.log(e)}>
                            <li onClick={e => e.stopPropagation()}><Link to={`/questions/${this.props.question.id}/edit`}>Edit</Link></li>
                            <li className="duplicate"><a href="#">Duplicate</a></li>
                            <li className="deli" onClick={() => this.props.deleteQuestion(this.props.question.id)}>Delete</li>
                        </ul>
                    ) : null}
                </button>
            </div>
        )
    }
}

export default ClickDropdown;

