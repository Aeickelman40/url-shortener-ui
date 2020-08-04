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

  addNewUrl = async ({ title, urlToShorten }) => {
    postUrl(title, urlToShorten)
    .then((response) => response.json())
    .catch((error) => console.log(error))
  }

  render() {
    console.log(this.state.urls)
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm
            saveUrl = {this.saveUrl}   />
        </header>

        <UrlContainer 
          urls={this.state.urls}

          />
      </main>
    );
  }
}

export default App;
