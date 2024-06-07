import Joi from "joi";

export const registerValidation = (user) => {
  try {
    const schema = Joi.object({
      username: Joi.string().min(4).max(15).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(15).required(),
      role: Joi.string().valid('admin', 'user', 'superadmin').optional(),
    });

    const { error, value } = schema.validate(user);

    if (error) {
      return {
        okay: false,
        messeges: error.details[0].message,
        status: 400,
        value: "",
      };
    };

    return {
      okay: true,
      messeges: "",
      status: 200,
      value,
    };
  } catch (error) {
    console.log(error);
    return {
      okay: false,
      messeges: error.message,
      status: 500,
      value: "",
    };
  }
};

export const loginValidation = (user) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(15).required(),
    });

    const { error, value } = schema.validate(user);

    if (error) {
      return {
        okay: false,
        messeges: error.details[0].message,
        value: "",
      };
    }

    return {
      okay: true,
      messeges: "",
      value,
    };
  } catch (error) {
    console.log(error);
    return {
      okay: false,
      messeges: error.message,
      value: "",
    };
  }
};

export const otpValidation = (user) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(15).required(),
    });

    const { error, value } = schema.validate(user);

    if (error) {
      return {
        okay: false,
        messeges: error.details[0].message,
        status: 400,
        value: "",
      };
    }

    return {
      okay: true,
      messeges: "",
      status: 200,
      value,
    };
  } catch (error) {
    console.log(error);
    return {
      okay: false,
      messeges: error.message,
      status: 500,
      value: "",
    };
  }
};
