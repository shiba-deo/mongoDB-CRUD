const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    description: { type: String, required: true, },
}, { versionKey: false, timestamps: true }
);
const Product = mongoose.model('todos', productSchema);

module.exports = Product;
