import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

class Counter extends Component{

    constructor() {
        super();

        this.state = {
            counter: 0
        }
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() { 
        return(
            <div className="counter">
                {/*Sample Comments for git */}
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <div><button onClick={()=>{this.increment(2)}}>+2</button>
            <button onClick={()=>{this.decrement(2)}}>-2</button></div>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>

            </div>
        );  
    }/*<div><button onClick={this.increment(2)}>+2</button>
        <button onClick={this.decrement(2)}>-2</button></div>*/
    reset() {
        this.setState( {counter: 0});
    }
    decrement(by) {
        this.setState( {counter: this.state.counter-by});
    }
    increment(by) { 

        this.setState(
            (prevState) => {
             return {counter: prevState.counter + by}
            }
        );
    }

}

class CounterButton extends Component{
    constructor() {
        super();
    }

    render() { 
        return(
            <div className="counterButton">
                <button onClick={()=>{this.props.incrementMethod(this.props.by)}}>+{this.props.by}</button>
                <button onClick={()=>{this.props.decrementMethod(this.props.by)}}>-{this.props.by}</button>
            </div>
        )
    }
    defaultProps = {
        by : 1
    }
    
    propTypes = {
        by : PropTypes.number
    }


}

 export default Counter;