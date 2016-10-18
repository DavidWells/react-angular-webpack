import React from 'react';

function renderWatchedRepos() {
  let watchedRepos = this.props.watchedRepos;

  return watchedRepos.map(function (repo, index) {
    return (
      <li key={index}>{repo.name}</li>
    );
  });
}

class WatchList extends React.Component {
  handleClick(){
    alert('hi')
  }
  render() {
    return (
      <ul>
        <button onClick={this.handleClick}>{'hi'}</button>
        {renderWatchedRepos.call(this)}
      </ul>
    );
  }
}

function WatchListFactory() {
  return WatchList;
}

export default WatchListFactory;
