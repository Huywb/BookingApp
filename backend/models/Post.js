import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    maxGuest: { type: Number, required: true },
    cleanFee: { type: Number, default: 0 },
    availableFrom: { type: Date, required: true },
    availableTo: { type: Date, required: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    cancellationPolicy: { type: String, default: 'Flexible' },
    status: { type: String, default: 'active' }
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
