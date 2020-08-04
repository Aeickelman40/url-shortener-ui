import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      long_url: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      title: this.state.title,
      long_url: this.state.long_url
    }
    this.props.saveUrl(newUrl);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    // console.log('state',this.state)
    // console.log('props', this.props)
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={this.state.long_url}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
