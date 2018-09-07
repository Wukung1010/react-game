import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            square: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        };
        this.currentPlay = 'X';
    }
    getPlay() {
        let cur = this.currentPlay;
        this.currentPlay = this.currentPlay === 'X'? 'O':'X';
        return cur;
    }
    handleClick(row, col) {
        let play = this.getPlay();
        if(this.state.square[row][col]) {
            return ;
        }
        this.state.square[row][col] = play;
        this.setState([].concat(this.state.square));
    }
    render() {
        return (
            <div className="borad">
                {
                    this.state.square.map((row, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {
                                row.map((cell, colIndex) => (
                                    <Square value={cell} onClick={() => {this.handleClick(rowIndex, colIndex)}} key={rowIndex+','+colIndex} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Board;