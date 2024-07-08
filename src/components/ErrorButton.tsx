import React from 'react';
import { IProps } from '../interfaces/MainPageInterface';

interface IState {
  error: boolean;
}

export class ClickComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      error: false
    };
  }

  handleClick = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('I crashed!');
    }

    return <button onClick={this.handleClick}>Crash me</button>;
  }
}

export default ClickComponent;
