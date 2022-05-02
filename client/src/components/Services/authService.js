export const getUser = () => {
    let username = sessionStorage.getItem('username');
    let userId = sessionStorage.getItem('userId');
   
  
    let userData = { username, userId }

    //return username;
    return userData;
};