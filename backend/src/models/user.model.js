const mongose = require("mongoose");
const userSchema = new mongose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongose.model("User", userSchema);