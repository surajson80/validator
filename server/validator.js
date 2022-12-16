const Joi = require('joi');
const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });


//This is dummy validation for unit 
/* const validateSchema = Joi.object({
    payer: Joi.number().min(3).max(6000).required(),
    payee: Joi.number().min(3).max(6000).required(),
    amount: Joi.number().positive().required(),
}); */


//From here all the validation will apply 
const validateSchema = Joi.array().min(1).
    messages({
        "array.min": 'Array should not be empty',
        "array.base": "Should be value"
    }).items(
        Joi.object({
            Payer_Ac:
                Joi.number().
                    allow('Payer_Ac').
                    positive().
                    integer().
                    min(1000000000000000).
                    required().
                    messages({
                        "number.positive": 'AC should be positive',
                        "number.integer": 'AC should be number',
                        "number.min": 'AC should be min 16 digit',
                        "number.disallow": 'AC should not be equal',
                        "number.base": "Payer_Ac should be number and not empty",
                        "number.allow": 'Should be Payer_Ac',
                        "any.required": 'Payer_Ac is required',
                    }),
            Payee_Ac:
                Joi.number().
                    positive().
                    integer().
                    min(1000000000000000).
                    required().
                    disallow(Joi.ref('Payer_Ac')).
                    messages({
                        "number.positive": 'AC should be positive',
                        "number.integer": 'AC should be number',
                        "number.min": 'AC should be min 16 digit',
                        "number.disallow": 'AC should not be equal',
                        "number.base": "Payee_Ac should be number and not empty",
                        "any.required": 'Payee_Ac is required',
                        "number.unsafe": 'Not a safe number'


                    }),
            Amount:
                Joi.number().
                    positive().
                    empty(null).
                    required().
                    messages({
                        "number.min": 'Amount should not be empty',
                        "number.precision": 'Amount should be 2 digit after dot',
                        "number.positive": 'Amount should be positive and greater than 0',
                        "number.base": "Amount should be number and not empty",
                        "any.required": 'Amount is required',

                    }),
        }).messages({
            "object.unknown": 'Other fields are not valid'
        })
    );

exports.validateCheck = validator(validateSchema);