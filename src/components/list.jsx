import React, {Component} from 'react';

class List extends Component {
    addData () {
        const input = this.refs.input;
        const val = input.value;
        this.props.add(val);
        input.value = '';
        return val;
    }
    render () {
        return (
            <div>
                <input type="text" ref='input'/>
                <button onClick={() => {
                    this.addData();
                }}>ADD</button>
            </div>
        )
    }
}
export default List;
