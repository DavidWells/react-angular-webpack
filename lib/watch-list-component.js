import React from 'react';


class WatchList extends React.Component {

	static defaultProps = {
		watchedRepos: []
	};

	render() {
		let {watchedRepos} = this.props;
		return (
			<div>
				<button onClick={() => alert('hi')}>{'hi'}</button>
				<ul>
					{watchedRepos.map((repo, index) => <li key={index}>{repo.name}</li>)}
				</ul>
			</div>
		);
	}
}

function WatchListFactory() {
	return WatchList;
}

export default WatchListFactory;
