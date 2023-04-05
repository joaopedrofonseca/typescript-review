import Joi from "joi";

const updateSchema = Joi.object({
    watched: Joi.boolean().required(),
    resume: Joi.string().required()
})

export default updateSchema