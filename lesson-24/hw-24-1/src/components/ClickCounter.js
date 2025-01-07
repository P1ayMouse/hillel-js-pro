import React from "react";
import './Counter.css'

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            mode: 'increment',
            multiplier: 1
        }
    }

    handleCount = () => {
        this.setState({
            count: this.state.mode === 'increment' ? this.state.count + this.state.multiplier : this.state.count - this.state.multiplier
        })
    }

    toggleMode = () => {
        this.setState({
            mode: this.state.mode === 'increment' ? 'decrement' : 'increment'
        })
    }

    resetCounter = () => {
        this.setState({
            count: 0
        })
    }

    changeMultiplier = (multiplierValue) => {
        this.setState({
            multiplier: multiplierValue
        })
    }

    render() {
        const {count, mode, multiplier} = this.state;
        return (
            <div className='counter-container'>
                <h1 className='counter-value'>
                    Значення: {count}
                </h1>
                <span className='counter-mode'>
                    Режим: {mode === 'increment' ? 'Збільшення' : 'Зменшення'}
                </span>

                <button className='counter-button' onClick={this.handleCount}>
                    {mode === 'increment' ? 'Додати ' + multiplier : 'Відняти ' + multiplier}
                </button>

                <button className='counter-button toggle-button' onClick={this.toggleMode}>
                    Перемкнути режим
                </button>

                <button
                    className='counter-button reset-button'
                    onClick={this.resetCounter}
                >
                    Скинути
                </button>

                <span>
                    <button
                        className='counter-button multiplier-button'
                        onClick={() => this.changeMultiplier(1)}
                    >
                        1
                    </button>
                    <button
                        className='counter-button multiplier-button'
                        onClick={() => this.changeMultiplier(5)}
                    >
                        5
                    </button>
                    <button
                        className='counter-button multiplier-button'
                        onClick={() => this.changeMultiplier(10)}
                    >
                        10
                    </button>
                </span>
            </div>
        );
    }
}

export default ClickCounter;
