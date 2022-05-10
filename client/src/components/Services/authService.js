export const getUser = () => {
    let username = sessionStorage.getItem('username');
    let userId = sessionStorage.getItem('userId');
    let userRoles = sessionStorage.getItem('userRoles'); 
  
    let userData = { username, userId, userRoles }

    //return username;
    return userData;
};