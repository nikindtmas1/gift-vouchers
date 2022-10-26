const bcrypt = require('bcrypt');

(async () => {
    const salt = await bcrypt.genSalt(10);
    console.log(await bcrypt.hash("niki123456", salt));
})();

//admin - (usename: nikispa, password: niki123456)
//editor - (username: sparec, password: spa123456)
//visitor - (username: mickeymouse, password: miki123456)