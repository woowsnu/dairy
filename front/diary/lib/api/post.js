import baseURL from '.';

// POST todos API
export const postTodoAPI = (post) =>
	fetch(`${baseURL}/post/regist`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(post),
	});

// POST todos API
export const getPostByUserAPI = (userId) =>
	fetch(`${baseURL}/post/user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userId),
	});

export const getPostByPostIdAPI = (postId) => fetch(`${baseURL}/post/${postId}`);


// POST todos API
export const putPostAPI = (editedPost) =>
	fetch(`${baseURL}/post/user`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(editedPost),
	});