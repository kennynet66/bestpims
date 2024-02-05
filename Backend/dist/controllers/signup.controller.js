"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
let user = [];
const signupController = (req, res) => {
    const { full_name, email, password } = req.body;
    let id = "to be filled by uuid";
    try {
        let newUser = { user_id: id, full_name, email, password };
        user.push(newUser);
        return res.json({
            message: "User created successfully",
            user
        });
    }
    catch (error) {
        return res.json(error);
    }
};
exports.signupController = signupController;
