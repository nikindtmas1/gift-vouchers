export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();

            return data;
        } catch (error) {
            return response;
        }

    } catch (error) {
        alert(error.message);
        throw error
    }
};



function getOption(method = 'get', body) {
    


    const options = {
        method,
        headers: {
            //'Content-Type': 'application/json',
            //'X-Authorization': token
            //'X-Parse-Application-Id': 'L3A2gZGIu7UpTKTKwO3yTGs4QS0j6JGEeR4qKv5U',
            //'X-Parse-REST-API-Key': 'sNs8wSD5FQtaOMFoGdxg5A4pNT5EmbCtFNrHvvsX'
        }
    }

    const token = sessionStorage.getItem('authToken');
  
    // if (token != null) {
    //'X-Authorization' = token
    //     options.headers['X-Parse-Session-Token'] = token;
    // }

    if (body) {
        
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-Authorization'] = token;
        options.body = JSON.stringify(body);
    }

    return options;

};

export async function get(url) {
    return await request(url, getOption());
};

export async function post(url, data) {
    return await request(url, getOption('post', data));
};

export async function put(url, data) {
    return await request(url, getOption('put', data));
};

export async function del(url) {
    return await request(url, getOption('delete'));
};

export async function login(username, password) {
    const result = await post(settings.host + '/users/login', { username, password });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('refreshToken', result.refreshToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('userRoles', result.userRoles);

    return result;
};

export async function register(username, password, roles) {
    const result = await post(settings.host + '/users/register', { username, password, roles });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('refreshToken', result.refreshToken);
    sessionStorage.setItem('userId', result._id);

    return result;
};

export async function logout(token) {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userRoles');

    return result;
}