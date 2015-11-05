import React from 'react';
import { Button } from 'anypoint-components'

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
        <Button onClick={this.handleClick.bind(this)} type="primary" label="hi" />
        {renderWatchedRepos.call(this)}
      </ul>
    );
  }
}

function WatchListFactory() {
  return WatchList;
}

export default WatchListFactory;
