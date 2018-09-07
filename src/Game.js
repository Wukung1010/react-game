import React, {Component} from 'react';
import Board from './Board';

const win = [
    []
]

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return <Board />;
    }
}

export default Game;