const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    email: {
      required: true,
      type: String,
      match: /.+\@.+\..+/,
      lowercase: true,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    UserName:{
      type: String
    }
    // ,
    // PPID:{
    //   type: String
    // }
    // UserID:{
    //   type: String,
    //   unique: true
    // }
  
},{strict:false});

// userSchema.pre("save", function (next) {
//   const user = this;

//   if (this.isModified("password") || this.isNew) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//       if (saltError) {
//         return next(saltError);
//       } else {
//         bcrypt.hash(user.password, salt, function (hashError, hash) {
//           if (hashError) {
//             return next(hashError);
//           }

//           user.password = hash;
//           next();
//         });
//       }
//     });
//   } else {
//     return next();
//   }
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
