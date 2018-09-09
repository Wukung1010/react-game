import React, {Component} from 'react';
import Board from './Board';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: new Array(9).fill(""),
            isWin: false,
            winner: "",
            history: [],
            historyNum: 10,
            currentPlay: 'X'
        }
        this.winList = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    }
    clickSquare(index) {
        if(this.state.isWin) {
            return;
        }
        if(this.state.squares[index] !== "") {
            return;
        }
        let play = this.getPlayFlag();
        let nextSquares = [].concat(this.state.squares);
        nextSquares[index] = play;
        this.checkWin();
        this.setState({
            squares: nextSquares
        });
    }
    checkWin() {
        let squares = this.state.squares;
        this.winList.some(list => {
            if(squares[list[0]] === '') {
                return false;
            }
            if(squares[list[0]] === squares[list[1]] && squares[list[1]] === squares[list[2]]) {
                this.setState({
                    isWin: true,
                    winner: list[0]
                });
                return true;
            }
        });
    }
    getPlayFlag() {
        let play = this.state.currentPlay;
        let next = play === 'X'?'O' :'X';
        this.setState({
            currentPlay: next
        });
        return next;
    }
    render() {
        return <Board squares={this.state.squares} onClick={this.clickSquare.bind(this)} isWin={this.state.isWin} winner={this.state.winner} />;
    }
}

export default Game;