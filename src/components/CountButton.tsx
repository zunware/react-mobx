import * as React from 'react';
import { observable, action } from "mobx";

export class CountButton extends React.Component<{},{count:number}> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>
        {this.state.count}
        </button>
      </div>
    );
  }
}
