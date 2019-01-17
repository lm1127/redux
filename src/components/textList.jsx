import React, {Component} from 'react';

class TextList extends Component {
    render () {
        return (
            <ul>
                {
                    this.props.list.map((val, index) => (
                        <li
                        key={index}
                        style={{
                            textDecoration: val.completed ? 'line-through' : 'none',
                            cursor: val.completed ? 'default' : 'pointer'
                        }}
                        onClick={() => {
                            this.props.remove(index);
                        }}
                        >{val.text}</li>
                    ))
                }
            </ul>
        )
    }
}
export default TextList;
