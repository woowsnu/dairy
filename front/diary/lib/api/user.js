import baseURL from "."

// Regist user API
export const registUserAPI = (user) => fetch(`${baseURL}/user`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})