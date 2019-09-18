import React from 'react';
import './App.css';
import ThreadCard from './ThreadCard';
import Loading from './Loading';
import { getSubreddit } from './RedditApi';

class App extends React.Component {
  constructor() {
    super();
    this.state = {subreddit: [], loading: true};
  }

  async componentDidMount() {
    let subreddit = await getSubreddit('javascript');
    this.setState({ subreddit, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> : this.state.subreddit[0].data.subreddit_subscribers}

        {this.state.subreddit.map((thread) => {
          return <ThreadCard thread={thread} key={thread.subreddit_id} />
        })}
      </div>
    );
  }
}

export default App;