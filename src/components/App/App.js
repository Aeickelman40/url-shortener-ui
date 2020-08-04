import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

componentDidMount = async () => {
    try {
      const urlsList = await getUrls()
      this.setState({urls: urlsList.urls})
    } catch (error) {
      this.setState({error: error})
    }
  }

  saveUrl = (newUrl)=> {
    this.setState({
      urls: [...this.state.urls, newUrl],
    })
    this.addNewUrl(newUrl);
  }

  addNewUrl = async ({ title, long_url }) => {
    postUrl(title, long_url)
  }

  deleteFromDom = (id) => {
    let selectedUrl = this.state.urls.find(url => url.id === id)
  }

  render() {
    // console.log(this.state.urls)
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm
            saveUrl = {this.saveUrl}   />
        </header>

        <UrlContainer 
          urls={this.state.urls}
          deleteUrl={this.deleteFromDom}
          />
      </main>
    );
  }
}

export default App;
