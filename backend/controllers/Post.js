import Post from "../models/Post.js";
import cloudinary from 'cloudinary'


export const createPost = async (req, res) => {
    try {
        const {
            name,
            price,
            location,
            host,
            description,
            maxGuest,
            cleanFee,
            availableFrom,
            availableTo,
            amenities,
            images,
            cancellationPolicy,
            status
        } = req.body;

        if (!name || !price || !location || !host || !description || !maxGuest || !availableFrom || !availableTo) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        let uploadedImages = [];
        if (images && images.length > 0) {
            const uploadPromises = images.map(image =>
                cloudinary.v2.uploader.upload(image)
            );

            const uploadResults = await Promise.all(uploadPromises);
            uploadedImages = uploadResults.map(result => result.secure_url);
        }

        const newPost = await Post.create({
            name,
            price,
            location,
            host,
            description,
            maxGuest,
            cleanFee: cleanFee || 0,
            availableFrom,
            availableTo,
            amenities: amenities || [],
            images: uploadedImages, 
            cancellationPolicy: cancellationPolicy || 'Flexible',
            status: status || 'active'
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            price,
            location,
            host,
            description,
            maxGuest,
            cleanFee,
            availableFrom,
            availableTo,
            amenities,
            images, 
            cancellationPolicy,
            status
        } = req.body;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (post.images && post.images.length > 0) {
            const deletePromises = post.images.map((imageUrl) => {
                const publicId = imageUrl.split('/').pop().split('.')[0]; 
                return cloudinary.v2.uploader.destroy(`${publicId}`);
            });

            await Promise.all(deletePromises);
        }

        let uploadedImages = [];
        if (images && images.length > 0) {
            const uploadPromises = images.map(image =>
                cloudinary.v2.uploader.upload(image)
            );

            const uploadResults = await Promise.all(uploadPromises);
            uploadedImages = uploadResults.map(result => result.secure_url);
        }

        post.name = name || post.name;
        post.price = price || post.price;
        post.location = location || post.location;
        post.host = host || post.host;
        post.description = description || post.description;
        post.maxGuest = maxGuest || post.maxGuest;
        post.cleanFee = cleanFee !== undefined ? cleanFee : post.cleanFee;
        post.availableFrom = availableFrom || post.availableFrom;
        post.availableTo = availableTo || post.availableTo;
        post.amenities = amenities || post.amenities;
        post.images = uploadedImages; 
        post.cancellationPolicy = cancellationPolicy || post.cancellationPolicy;
        post.status = status || post.status;

        const updatedPost = await post.save();
        res.status(200).json(updatedPost);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const deletePost = async(req,res)=>{
    try {
        const {id} = req.params

        const delPost = await Post.findByIdAndDelete(id)
        if(!delPost){
            return res.status(400).json({message:"Cannot find post"})
        }
        if (delPost.images && delPost.images.length > 0) {
            const deletePromises = delPost.images.map((imageUrl) => {
                const publicId = imageUrl.split('/').pop().split('.')[0];
                return cloudinary.v2.uploader.destroy(publicId);
            });

            await Promise.all(deletePromises);
        }

        res.status(200).json({message:'Delete Post success'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        
    }
}

export const getPost = async(req,res)=>{
    try {
        const {id} = req.params
        const post = await Post.findById(id)
        if(!post){
            return  res.status(400).json({message:'This Post invalid'})
        }

        res.status(200).json(post)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        
    }
}