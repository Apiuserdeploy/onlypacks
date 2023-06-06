import { Schema, model, models } from "mongoose";

/* Creating a schema for the database. */
const imagesSchema = new Schema({
    category: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        index: true
    },
    actress: {
        type: String,
        required: true,
        index: true
    },
    labels: {
        type: Object,
        required: true,
        index: true
    },
    image: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
    versionKey: false
});

export default models.Images || model("Images", imagesSchema)