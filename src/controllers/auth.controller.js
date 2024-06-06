import {
    registerValidation,
    loginValidation,
    otpValidation
} from "../validations/auth.validation.js";
import {
    registerService,
    loginService,
    otpService,
    logoutService
} from "../services/auth.service.js";


export const registerController = async(req, res) => {
    try {
        const { body } = req;

        const { okay, value, messeges, statuss } = await registerValidation(body);

        if (!okay) {
            return res.render('register', {article : 'Register Page', message : messeges});
        };

        const {ok, values, status, message } = await registerService(value);

        return res.render('register', {article : 'Register Page', message : messeges});

    } catch (error) {
        console.log(error);
        return res.render('register', {article : 'Register Page', message : error.message});
    };
};

export const loginController = async(req, res) => {
    try {
        const { body } = req;

        const { okay, value, messeges, statuss } = await loginValidation(body);

        if (!okay) {
            return res.status(statuss).json({messege : messeges});
        };

        const {ok, values, status, message } = await loginService(value);

        if (!ok) return res.status(status).json({message});
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    };
};

export const otpController = async(req, res) => {
    try {
        const { body } = req;

        const { okay, value, messeges, statuss } = await otpValidation(body);

        if (!okay) {
            return res.status(statuss).json({messege : messeges});
        };

        const {ok, values, status, message } = await otpService(value);

        if (!ok) return res.status(status).json({message});
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    };
};

export const logoutController = async(req, res) => {
    try {
        const {ok, values, status, message } = await logoutService();

        if (!ok) return res.status(status).json({message});
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    };
};