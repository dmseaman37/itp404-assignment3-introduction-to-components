export async function getSubreddit(name) {
	let response = await fetch(`https://www.reddit.com/r/${name}.json`);
	let subreddit = await response.json();
	return subreddit.data.children;
}