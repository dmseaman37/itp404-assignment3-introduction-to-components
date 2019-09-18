import React from 'react';

export default function ThreadCard(props) {
	let thread = props.thread.data;

	return (
		<div className="thread-card">
			<div className="title">
				<a href={thread.url}>{thread.title}</a>
			</div>
			<div className="author">
				<p>Author: {thread.author}</p>
			</div>
			<div className="ups">
				<p>Score: {thread.ups.toLocaleString()}</p>
			</div>
			<div className="comments">
				<p>Comments: {thread.num_comments}</p>
			</div>
		</div>
	)
}