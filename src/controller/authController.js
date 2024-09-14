import userModel from "../model/userModel.js";
// user authentication rout
export const registerController = async (req, res,next) => {
    try {
        const { name, middleName, email, password , location} = req.body
        if (!name) {
            success:"false";
            next("name is require");
            }

        if (!middleName) {
            success:"false";
            next("middleName is require");
        }
        if (!email) {
            success:"false"
            next("email is require");
        }
        if (!password) {
            success:"false";
            next("password is require");
        }
        if (!location) {
            success:"false";
            next("location is require");
        }
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            success:"false";
           next("email is already exist please try to login")
        }
        const user = await userModel.create({ name, middleName, email, password , location })
        res.status(200).send({
            message: "user created",
            success: true,
            user
        });

    } catch (error) {
        console.log(error);
            next(error);
        }


}

