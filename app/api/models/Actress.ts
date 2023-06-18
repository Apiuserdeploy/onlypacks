import { Schema, model, models } from "mongoose";

/* Creating a schema for the database. */
const actressSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    actress: {
        type: String,
        required: true,
    },
    images: {
        type: Object,
        required: true,
    },
    actressid: {  
        type: Schema.Types.ObjectId, 
        required: true,
        ref: 'Images',
        index: true,
        unique: true
    }
},{
    timestamps: false,
    versionKey: false
});

export default models.Actress || model("Actress", actressSchema)