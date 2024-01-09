// import React from 'react'

// export default function TagsAdmin() {
//   return (
//     <div>TagsAdmin
      
//     </div>
//   )
// }

import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';


const options = [
  { value: 'flavor', label: 'flavor' },
  { value: 'yummy', label: 'yummy' },
  { value: 'red', label: 'red' },
  { value: 'green', label: 'green' },
  { value: 'yellow', label: 'yellow' },
];

export default class TagsAdmin extends Component {
  state = {
    selectedOption: 'None',
  }

  testOneWeek = ()=>{alert('hello')}

  handleChange = ({ target }) => {
    
    // this.setState({
    //   selectedOption: target.value
     
    // })
    if(target.value === 'red'){
       this.setState({
      selectedOption: target.value
    })
      console.log('red')
      this.testOneWeek();

    } else if(target.value === 'green'){
      console.log('green')
      this.setState({
        selectedOption: target.value
       
      })

    }else if(target.value === 'yellow'){
      console.log('yellow')
      this.setState({
        selectedOption: target.value
       
      })

    }else if(target.value === 'yummy'){
      console.log('yummy')
      this.setState({
        selectedOption: target.value
       
      })

    }else if(target.value === 'flavor'){
      console.log('flavor')
      this.setState({
        selectedOption: target.value
       
      })

    }
  }

  resetclick = ()=> {
    this.setState({
      selectedOption: 'red'
     
    })
  }

  render() {
    return (
      <div>
        <span>{this.state.selectedOption}</span>
        <select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          >
        {options.map(({ value, label }, index) => <option value={value} >{label}</option>)}
        </select><br/><br/>
        <button onClick={this.resetclick}>click</button>
      </div>
    );
  }
}

// render(<TagsAdmin />, document.getElementById('root'));

// export default class TagsAdmin extends React.Component {}
