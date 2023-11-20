const mongoose = require('mongoose');

const userSchema =new mongoose.Schema(
    {
        userName: {type: mongoose.SchemaTypes.String, required:true},
        email: {type: mongoose.SchemaTypes.String, required:true, unique:true},
        password: {type: mongoose.SchemaTypes.String, required:true},
    },
    {
        timestamps: true
    }
)

const user = mongoose.model("User", userSchema);
module.exports = user;