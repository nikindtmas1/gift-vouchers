const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createAccessToken, createRefreshToken } = require('../utils/jwtUtils');

// function register({username, password, roles}){

//     let user = new User({username, password, roles})
    
//     return user.save();
//     }

exports.register = ({username, password, roles}) => {
   
        const saltPass = 9;
        const myPass = password;
        console.log(myPass);
        bcrypt.genSalt(saltPass, (err, salt) => {
            bcrypt.hash(myPass, salt, (err, hash) => {
                console.log(hash)
                let user = new User({username, hash, roles})
                user.save();
               
            });
        });
    // let user = new User({username, hashPass, roles})
    // await user.save();
    //User.create({username, password, roles});
};

exports.login = async ({username, password}) => {

    const currUser = username;
    const currPass = password;

    const user = await User.findByUsername(currUser);
   
    if(!user) throw new Error('Invalid username!')
    const valide = await bcrypt.compare(currPass, user.password);
    if(!valide) throw new Error('Invalid password!');
    //let user = await User.findOne({username, password});
  
    if(user.username === currUser){
        
        // const saltPass = 9;
        // const myPass = 'miki123456';
        // bcrypt.genSalt(saltPass, (err, salt) => {
        //     bcrypt.hash(myPass, salt, (err, hash) => {
        //         console.log(hash)
               
        //     });
        // });
        //const hashPass = '$2b$09$Lk7bxzhn0bTUEWRUxu9Q8ODbrQjipzpgQlSv88VUSJO5PJESpDn4.'
        //const secHash = '$2b$09$L.Qotph6f7plVzOERix7IuwjJYdaXVytQzBNYU53NH6E5.RaTiOFq'
            const accessToken = createAccessToken(user);
            //const refreshToken = createRefreshToken(user);
            //const accessToken = jwt.sign({_id: user._id, username: user.username}, 'MOGYSHTSECRET', { expiresIn: '60m' });
            const refreshToken = await jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '1d' });
            
            user.refreshToken = refreshToken;
            const userRoles = user.roles;
            user.roles = userRoles;
    
            await user.save();
    
            return { user, accessToken, refreshToken, userRoles };
        

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
    const { _id } = jwt.verify(refreshToken, 'mnogoqkaparola2');

    const user = await User.find({ _id, refreshToken });

    if (user) {
            const accessToken = createAccessToken(user);
            const refreshToken = createRefreshToken(user);

        return { accessToken, refreshToken };
    } else {
        return null;
    }
};

// module.exports = {
//     register,
// }