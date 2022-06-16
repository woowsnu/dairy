import baseURL from ".";

// GET diary API
export const getDiaryAPI = () => fetch(`${baseURL}/post`,{
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'
    }
});