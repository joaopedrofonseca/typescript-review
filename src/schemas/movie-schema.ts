import Joi from "joi";

const movieSchema = Joi.object({
    name: Joi.string().required(),
    stream: Joi.string().required(),
    gender: Joi.string().required(),
    watched: Joi.boolean().required(),
})

export default movieSchema