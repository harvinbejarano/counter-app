import React, { Component } from 'react';

class Counter extends Component {
    /*state = {
        value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
    };*/

    styles = {
        fontSize: 16,
        fontWeight: 'bold'
    };


    /* renderTags() {
         if (this.state.tags.length == 0) {
             return <p>The are no tags</p>
         }
         else {
             return (
                 <ul>
                     {this.state.tags.map((tag) => <li key={tag}> {tag} </li>)}
                 </ul>
             );
         }
     }*/

    /*handleIncrement = (id) => {
        this.setState({ value: this.state.value + 1 });
    }*/



    render() {
        return (
            <div>
                <span
                    style={this.styles}
                    className={this.getBadgeClasses()}>

                    {this.formatCount()}

                </span>

                <button
                    type="button"
                    //onClick={() => this.handleIncrement({ id: 1 })}
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn  btn-secondary btn-sm">

                    Increment

                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value) === 0 ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;