import mongoose from "mongoose";

const movieScheme = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        
    },

    genres: {
        type: [String],
        required: true,
    },

    casts: {
        type: [String],
        required: true,
    },

    director: {
        type: String,
        required: true,
    },

    overview: {
        type: String,
        required: true
    },

    likes: {
        type: [Object],
    },
    comments: {
        type: [Object]
    }
})

const Movie = mongoose.model('Movie', movieScheme);

export default Movie;