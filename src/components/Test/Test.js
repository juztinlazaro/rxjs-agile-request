import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getBlogEpic,
  postBlogEpic,
  patchBlogEpic,
  putBlogEpic,
  deleteBlogEpic,
  getBlogCancel,
  postBlogCancel,
  putBlogCancel,
  patchBlogCancel,
  deleteBlogCancel,
} from 'Actions/queries/blog/blog.action';

class Test extends Component {
  state = {
    data: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  };

  componentWillUnmount() {
    this.props.getBlogCancel();
    if (this.props.loading) {
      this.props.getBlogCancel();
      // this.props.postBlogCancel();
      // this.props.putBlogCancel();
      // this.props.patchBlogCancel();
      // this.props.deleteBlogCancel();
    }
  }

  onGetPost = () => {
    this.props.getBlogEpic();
  };

  onPostPost = () => {
    this.props.postBlogEpic(this.state.data);
  };

  onPatchPost = () => {
    this.props.patchBlogEpic(this.state.data);
  };

  onPutPost = () => {
    this.props.putBlogEpic(this.state.data);
  };

  onDeletePost = () => {
    this.props.deleteBlogEpic(2);
  };

  render() {
    console.log(this.props);
    return (
      <section className="Test-section">
        {/* {this.props.loading && <FullWidthLoading type="Spin" />} */}

        <h3>Yow! im a test component and route</h3>

        <button onClick={this.onGetPost}>get request</button>

        <button onClick={this.onPostPost}>post request</button>

        <button onClick={this.onPatchPost}>patch request</button>

        <button onClick={this.onPutPost}>put request</button>

        <button onClick={this.onDeletePost}>delete request</button>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blogs.blogs,
    loading: state.blogs.loading,
    isLoading: state.blogs.isLoading,
  };
};

export default connect(
  mapStateToProps,
  {
    getBlogEpic,
    getBlogCancel,
    postBlogEpic,
    patchBlogEpic,
    putBlogEpic,
    deleteBlogEpic,
    postBlogCancel,
    putBlogCancel,
    patchBlogCancel,
    deleteBlogCancel,
  },
)(Test);
