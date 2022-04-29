const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.login = async ({username, password}) => {

    let user = await User.findOne({username, password});

    if(user){
        // const valide = await bcrypt.compare(password, user.password);
        // if(!valide) throw new Error('Invalid username or password!');

        // if(valide){

        // let accessToken = jwt.sign({_id: user._id, username: user.username}, 'MOGYSHTSECRET', { expiresIn: '1m' });
        // let refreshToken = await jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '1d' });
        
        // user.refreshToken = refreshToken;

        // await user.save();

        // return { user, accessToken, refreshToken };

        // }
        
        let accessToken = jwt.sign({_id: user._id, username: user.username}, 'MOGYSHTSECRET', { expiresIn: '1m' });
        let refreshToken = await jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '1d' });
        
        user.refreshToken = refreshToken;

        await user.save();

        return { user, accessToken, refreshToken };
        
    }else{
        throw new Error('No such user');
    }
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