import { Schema, model, models } from "mongoose";

/* Creating a schema for the database. */
const categoriesSchema = new Schema({
    category: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
    versionKey: false
});

export default models.Categories || model("Categories", categoriesSchema)