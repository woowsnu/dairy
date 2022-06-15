import baseURL from "."

// Regist user API
export const postUserAPI = (user) => fetch(`${baseURL}/regist`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})