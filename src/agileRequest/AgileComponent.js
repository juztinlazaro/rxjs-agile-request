import React, { Component } from 'react';
import FullWidthLoading from 'ubidy_ui_kit/lib/FullWidthLoading';

let asyncLoading = false;

const handleAgileCancel = () => {
  console.log('i cancel the request');
  asyncLoading = false;
  return true;
};

const agileUpdateLoading = status => {
  console.log(status);
  asyncLoading = status;
};

const AgileComponent = importComponent => {
  return class Something extends Component {
    state = {
      loading: asyncLoading,
    };
    componentWillUnmount() {
      if (asyncLoading) {
        handleAgileCancel();
      }
    }

    componentDidUpdate(nextState) {
      console.log(nextState.loading);
    }

    render() {
      const ImportComponent = importComponent;
      console.log(this.props.asyncLoading);
      return (
        <div>
          {this.state.loading && <FullWidthLoading type="Spin" />}
          <ImportComponent {...this.props} />
        </div>
      );
    }
  };
};

export { AgileComponent, agileUpdateLoading, handleAgileCancel };
