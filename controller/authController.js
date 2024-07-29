import userModel from "../model/userModel.js";

export const registerController = async (req, res) => {
    try {
        const { name, middleName, email, password } = req.body
        if (!name) {
            res.status(400).send({
                message: "name is require", success: false
            });
        }
        if (!middleName) {
            res.status(400).send({
                message: "middle-name is require", success: false
            });
        }
        if (!email) {
            res.status(400).send({
                message: "email is require", success: false
            });
        }
        if (!password) {
            res.status(400).send({
                message: "password is require", success: false,
                minLength:[6,"password lejgth should bw grater than 6"]
            });
        }
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(200).send({
                success: fail,
                message: "email already exist add another email"
            })
        }
        const user = await userModel.create({ name, middleName, email, password })
        res.status(200).json({
            message: "user created",
            success: true,
            user
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error in registration form",
            success: false,
            error
        })
    }


}