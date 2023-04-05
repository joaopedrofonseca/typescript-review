import Joi from "joi";
var movieSchema = Joi.object({
    name: Joi.string().required(),
    stream: Joi.string().required(),
    gender: Joi.string().required(),
    watched: Joi.boolean().required(),
});
export default movieSchema;
