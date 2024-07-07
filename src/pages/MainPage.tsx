import React, { Component } from 'react';
import { IMainPage, IProps } from '../interfaces/MainPageInterface';
import styles from './MainPage.module.css';

class MainPage extends Component<IProps, IMainPage> {
  constructor(props: IProps) {
    super(props);
    const savedQuery = localStorage.getItem('searchQuery') || '';
    this.state = {
      query: savedQuery,
      data: [],
      isLoading: false,
      error: null
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = async () => {
    this.setState({ isLoading: true, error: null, data: [] });
    let response: Response;
    try {
      if (this.state.query !== '') {
        response = await fetch(`https://api.github.com/search/repositories?q=${this.state.query}&per_page=10&page=1`);
        const data = await response.json();
        this.setState({ data: data.items, isLoading: false });
        localStorage.setItem('searchQuery', this.state.query);
      } else {
        response = await fetch('https://api.github.com/repositories');
        const data = await response.json();
        const limitedData = data.slice(0, 10);
        this.setState({ data: limitedData, isLoading: false });
      }
    } catch (error) {
      this.setState({ isLoading: false, error: 'Failed to fetch data' });
    }
  };

  triggerError = () => {
    throw new Error('This is a test error');
  };

  componentDidMount() {
    if (this.state.query) {
      this.handleSearch();
    }
  }

  render() {
    return (
      <div>
        <div className={styles.searchBlock}>
          <input type="text" value={this.state.query} onChange={this.handleInputChange} />
          <button onClick={this.handleSearch}>Search</button>
          <button onClick={this.triggerError}>Trigger Error</button>
        </div>
        <main className={styles.mainBlock}>
          {this.state.isLoading && <p>Loading...</p>}
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.data.map((res) => (
            <div className={styles.block} key={res.id}>
              <p>Repository name: {res.full_name}</p>
              <p>Owner: {res.owner.login}</p>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default MainPage;
