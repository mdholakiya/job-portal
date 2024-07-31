import userModel from "../model/userModel.js";

export const registerController = async (err,req, res,next) => {
    try {
        const { name, middleName, email, password } = req.body
        if (!name) {
            next("name is require");
            }

        if (!middleName) {
            next("middleName is require");
        }
        if (!email) {
            next("email is require");
        }
        if (!password) {
            next("password is require");
        }
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
           next("email is already exist please try to login")
        }
        const user = await userModel.create({ name, middleName, email, password })
        res.status(200).send({
            message: "user created",
            success: true,
            user
        });

    } catch (error) {
        console.log(error)
            next(error);
        }


}