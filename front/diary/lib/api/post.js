import baseURL from '.'; 

// POST todos API
export const postTodoAPI = (post) => fetch(`${baseURL}/post`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
});