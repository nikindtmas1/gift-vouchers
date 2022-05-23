const bcrypt = require('bcrypt');

(async () => {
    const salt = await bcrypt.genSalt(10);
    console.log(await bcrypt.hash("niki123456", salt));
})();