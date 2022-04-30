const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async ({username, password}) => {

    let currUser = username;
    let currPass = password;

    let user = await User.findOne({currUser});
    if(!user) throw new Error('Invalid username!')
    const valide = await bcrypt.compare(currPass, user.password);
    if(!valide) throw new Error('Invalid password!');
    //let user = await User.findOne({username, password});
  
    if(user.username === currUser){
        
        // const saltPass = 9;
        // const myPass = '@NikiN240424';
        // bcrypt.genSalt(saltPass, (err, salt) => {
        //     bcrypt.hash(myPass, salt, (err, hash) => {
        //         console.log(hash)
               
        //     });
        // });
        //const hashPass = '$2b$09$Lk7bxzhn0bTUEWRUxu9Q8ODbrQjipzpgQlSv88VUSJO5PJESpDn4.'
        
            let accessToken = jwt.sign({_id: user._id, username: user.username}, 'MOGYSHTSECRET', { expiresIn: '60m' });
            let refreshToken = await jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '1d' });
            
            user.refreshToken = refreshToken;
    
            await user.save();
    
            return { user, accessToken, refreshToken };
        

        // let accessToken = jwt.sign({_id: user._id, username: user.username, roles: user.roles}, 'MOGYSHTSECRET', { expiresIn: '1m' });
        // let refreshToken = await jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '1d' });
        
        // user.refreshToken = refreshToken;

        // await user.save();

        // return { user, accessToken, refreshToken };
    }
    // }else{
    //     throw new Error('No such user');
    // }
};

exports.refresh = async (refreshToken) => {
    let { _id } = jwt.verify(refreshToken, 'MOGYSHTSECRET2');

    let user = await User.find({ _id, refreshToken });

    if (user) {
        let accessToken = jwt.sign({ _id: user._id, username: user.username }, 'MOGYSHTSECRET', { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '1d' });

        return { accessToken, refreshToken };
    } else {
        return null;
    }
};