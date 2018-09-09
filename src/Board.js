import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
    }
    getRows() {
        let squares = this.props.squares;
        let rows = [];
        for(let row = 0; row < squares.length; row += 3) {
            let rowData = squares.slice(row, row + 3);
            rows.push(
                <div className="row" key={row}>
                    {
                        rowData.map((d, col) => this.getSquare(d, row + col))
                    }
                </div>
            );
        }
        return rows;
    }
    getSquare(val, key) {
        return <Square value={val} onClick={() => {this.props.onClick(key)}} key={key}/>
    }
    render() {
        return (
            <dir>
                <div className="borad">
                    {
                        this.getRows()
                    }
                </div>
                {
                    this.props.isWin?<div>winner: {this.props.winner}</div>:null
                }
            </dir>
        );
    }
}

export default Board;