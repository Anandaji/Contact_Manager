import React, { Component } from 'react';
class Counts extends Component {
    constructor(props){
    super(props);
    this.state={
        data1:"",
        text:[]

    };
}
handle=e=>{
    this.setState({
        data1:e.target.value
    })
   
}

clickfun =(event) => {
    this.setState({
        text:[this.state.text.concat,{title:this.state.data1} ],
        data1:""
    })
    this.refs.data.value=""
}
   

    render() { 
        console.log(this.state.text)
        
        return ( 
            <div>
                <input type="text" onChange={this.handle} value={this.state.data1} ref="data"></input>
                 <button onClick={this.clickfun}>Start</button>
            <ul>
                {this.state.text.map( i=>{
                    return(
                    <li key={i.title}>{i.title} </li>)
                })}
            
            </ul>

            </div>
         );
    }
}
 
export default Counts;