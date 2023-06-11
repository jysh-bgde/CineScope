import asyncHandler from 'express-async-handler'
import Movie from '../models/movieModel.js';
import User from '../models/userModel.js';
import { v4 as uuidv4 } from 'uuid';


const addMovieComment = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    const movie = await Movie.findById(req.params.movieId)
    const movieDetails = req.body
   
    if(user)
    {
        if(movie)
        {
        movie.comments.push({
            _id: uuidv4(),
            userId: req.user._id,
            userName: user.name,
            comment: req.body.comment,
            time : new Date()
        })
        const updatedMovie = await movie.save(movie);
      
        res.status(200).send(updatedMovie)
        }
        else
        {   
            const comments = [{
            _id: uuidv4(),
            userId: req.user._id,
            userName: user.name,
            comment: req.body.comment,
            time : new Date()
        }]

            
            const updatedMovie = await Movie.create({
            _id: movieDetails.movieId,
            title: movieDetails.movieTitle,
            genres: movieDetails.genres,
            casts: movieDetails.casts,
            director: movieDetails.director[0],
            overview: movieDetails.overview,
            likes : movieDetails.likes,       
            comments : comments
        })
       
        res.status(200).send(updatedMovie)
            
        }
    }
    else
    {
        res.status(404);
        throw new Error('An error occured')
    }
})

const movieComments = asyncHandler(async (req, res)=> {
    const user = await User.findById(req.user._id)
    const movieId = req.params.movieId
    const movie = await Movie.findById(movieId)

    if(user)
    {

        if(movie)
        {  
            res.status(200).send(movie)
        }
        else
        {
            res.status(404);
            throw new Error("Movie doesnt exist")
        }
    }
    else
    {
        res.status(404);
        throw new Error('An error occured')
    }
})


const deleteMovieComment = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    const movie = await Movie.findById(req.params.movieId)
    const commentId = req.body.comment._id

 
    if(user)
    {
        if(movie)
        {
            let obj = movie.comments.find((comment)=> (comment._id === commentId))
            if(obj)
            {
                let index = movie.comments.indexOf(obj);
                movie.comments.splice(index,1)

                const updatedMovie = await movie.save()
                res.status(200).send(updatedMovie)

            }
            else
            {
                res.status(404);
                throw new Error('An error occured')
            }
        }
        else
        {
            res.status(404);
        throw new Error('An error occured')
        }
    }
    else
    {
        res.status(404);
        throw new Error('An error occured')
    }


})
export {
    addMovieComment,
    movieComments,
    deleteMovieComment
}