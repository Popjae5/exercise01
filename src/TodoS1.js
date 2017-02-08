import React , {Component,PropTypes} from 'react';
import './bulma.css';
export class TodoSelect extends Component {
state={
  ValueState:''
}
HandleValue=(event)=>{
  this.setState({ValueState:event.target.value});
}
render(){
  var BoxArray=[];
  for (var i = 1; i <= this.state.ValueState; i++) {
    BoxArray.push(<div className="column notification is-primary has-text-centered"><div className="notification is-warning">{i}</div></div>);
  }
  return(
    <div>
      <span className="select" onChange={this.HandleValue} value={this.state.ValueState}>
          <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
          </select>
      </span>
      <div className="columns">{BoxArray}</div>
    </div>
  );
}

}
