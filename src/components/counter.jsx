import React, { Component } from 'react';

class Counter extends Component {
    state = {
        greatingMessage: "Hello World!!!",
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 16,
        fontWeight: 'bold'
    };

    /*constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    renderTags() {
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
    }

    handleIncrement = (id) => {
        console.log(id);

        this.setState({ count: this.state.count + 1 });
    }



    render() {
        return (
            <div>
                <h1>{this.state.greatingMessage}</h1>
                <span
                    style={this.styles}
                    className={this.getBadgeClasses()}>

                    {this.formatCount()}

                </span>

                <button
                    type="button"
                    onClick={() => this.handleIncrement({ id: 1 })}
                    className="btn  btn-secondary btn-sm">

                    Action

                </button>

                {this.renderTags()}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count) === 0 ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;