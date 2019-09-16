const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

module.exports = {
  searchUser: async ({ category })  => {
     console.log('args',category);
    try {
      const existingUser = await User.findOne({ category:category });
      if (existingUser) {
        console.log('yessd-------yesfdf',existingUser);
         return {  userId: existingUser.id, fans: existingUser.fans, following:existingUser.following,name:existingUser.name,heart:existingUser.heart };
      }else{
        console.log('Something going wrong');
      }
    } catch (err) {
      throw err;
    }
  }
};
