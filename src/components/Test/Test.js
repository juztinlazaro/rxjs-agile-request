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
} from 'Actions/blog/blog.action';

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

  onCancelGetPost = () => {
    this.props.getBlogCancel();
  };

  onPostPost = () => {
    this.props.postBlogEpic(this.state.data);
  };

  onCancelPostBlog = () => {
    this.props.postBlogCancel();
  };

  onPatchPost = () => {
    this.props.patchBlogEpic(this.state.data);
  };

  onCancelPatchBlog = () => {
    this.props.patchBlogCancel();
  };

  onPutPost = () => {
    this.props.putBlogEpic(this.state.data);
  };

  onCancelputBlog = () => {
    this.props.putBlogCancel();
  };

  onDeletePost = () => {
    this.props.deleteBlogEpic(2);
  };

  onCancelDeleteBlog = () => {
    this.props.deleteBlogCancel();
  };

  render() {
    console.log(this.props);
    return (
      <section className="Test-section">
        {/* {this.props.loading && <FullWidthLoading type="Spin" />} */}

        <h3>Yow! im a test component and route</h3>

        <button onClick={this.onGetPost}>get request</button>
        <button onClick={this.onCancelGetPost}>cancel get request</button>
        <br />
        <br />
        <br />

        <button onClick={this.onPostPost}>post request</button>
        <button onClick={this.onCancelPostBlog}>cancel post request</button>
        <br />
        <br />
        <br />

        <button onClick={this.onPatchPost}>patch request</button>
        <button onClick={this.onCancelPatchBlog}>cancel patch request</button>
        <br />
        <br />
        <br />

        <button onClick={this.onPutPost}>put request</button>
        <button onClick={this.onCancelPutBlog}>cancel put request</button>
        <br />
        <br />
        <br />

        <button onClick={this.onDeletePost}>delete request</button>
        <button onClick={this.onCancelDeleteBlog}>cancel delete request</button>
        <br />
        <br />
        <br />
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
