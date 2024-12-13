export const schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, { _id }) => _id.toString()
    },
    toObject: {
        virtuals: true,
        transform: (doc, ret) => {
            ret._id = ret._id.toString();
            return ret;
        },
    },
    versionKey: false
}