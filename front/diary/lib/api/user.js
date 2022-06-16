import baseURL from "."

// Regist user API
export const registUserAPI = (user) => fetch(`${baseURL}/user/regist`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})

// login user API
export const loginUserAPI = (inputUser) => fetch(`${baseURL}/user/login`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputUser)
})