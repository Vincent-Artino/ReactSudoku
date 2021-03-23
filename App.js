import React from "react";
import "./App.css"

function App(){
    return (
        <div className = "App">
            <div className = "Game"></div>
            <div className = "GameBoard">
                <Board />
            </div>
            <div className = "GameStats">
                <div>{ /*TO DO*/ }</div>
                <ol > { /*TO DO*/}</ol>
            </div>
        </div>
    );
}

class Board extends React.Component{
    renderSquare(i){
        return(
            <Square />
        );
    }
    render(){
        <div className = "BoardRow">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>,
        <div className = "BoardRow">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>,
        <div className = "BoardRow">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
    }
}

class Square extends React.Component{
    renderCell(i){
        return <Cell />;
    }
    render(){
        <div className = "CellRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
        </div>,
        <div className = "CellRow">
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
        </div>,
        <div className = "CellRow">
            {this.renderCell(6)}
            {this.renderCell(7)}
            {this.renderCell(8)}
        </div>
    }
}

function Cell(){
    return (
        <button className = "Cell">
        </button>
    )
}