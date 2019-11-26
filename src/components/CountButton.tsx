import * as React from 'react';
import { observable, action } from "mobx";
import { observer } from 'mobx-react';

class CountData {
  @observable count = 0;

  @action
  increment() {
    this.count++;
  }
}

@observer
export class CountButton extends React.Component<{}> {
  data = new CountData();
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.data.increment()}>
        {this.data.count}
        </button>
      </div>
    );
  }
}
