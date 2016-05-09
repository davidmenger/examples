'use strict';

const React = require('react');

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            shown: false
        };
        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed () {
        this.setState({ shown: !this.state.shown });
    }

    render () {
        let shown = null;
        if (this.state.shown) {
            shown = (<b>Visible!</b>);
        }
        return (<div>
            <h2>Hello world</h2>
            <input type="button" onClick={this.buttonPressed} value="Muh" />
            {shown}
        </div>);
    }
}

module.exports = App;
