import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0,
            textB : ''
        }
        // console.log(this)
    }
    componentDidMount(){
        document.title = 'Hi'
        // console.log('Mount')
    }
    componentDidUpdate(){
        // console.log('Update')
        document.title = this.state.count
    }
    componentWillUnmount(){
        // console.log('Unmount')
        document.title = 'Bye'
    }
    increment=()=> this.setState({count : this.state.count + 1})
    decrement=()=> this.state.count>0 &&  this.setState({count : this.state.count -1})
    render(){
        return(
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <input type='text' onChange={(e)=>this.setState({textB : e.target.value})}/>
                <h2>{this.state.textB}</h2>
            </div>
        )
    }
}

export default Counter