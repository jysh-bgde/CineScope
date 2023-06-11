import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import Movie from '../models/movieModel.js'


//@desc Auth user/token
//route POST /api/users/auth
//@access public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password)))
    {   
        generateToken(res, user._id);
        res.status(201).json({
            _id : user._id,
            name: user.name,
            email: user.email,
            movies: user.movies,
            likedMovies: user.likedMovies
        })
        
    }
    else
    {
        res.status(401);
        throw new Error('Invalid email or password');
    }
 
    res.status(200).json({message: 'Auth User' });
});

//@desc register a new user
//route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {

    const {name, email, password, movies} = req.body;

    const userExists = await User.findOne({email});

    if(userExists)
    {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
        movies
    })
    
    if(user)
    {   
        generateToken(res, user._id);
        res.status(201).json({
            _id : user._id,
            name: user.name,
            email: user.email,
            movies: user.movies,
            likedMovies: user.likedMovies

        })
        
    }
    else
    {
        res.status(400);
        throw new Error('Invalid user data');
    }

});

//@desc logout user
//route POST /api/users/logout
//@access public
const logoutUser = asyncHandler(async (req, res) => {

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),

    })
 
    res.status(200).json({message: 'User logged out' });
});

//@desc get user profile
//route GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {

    const user = {
        _id : req.user._id,
        name: req.user.name,
        email: req.user.email,
        movies: req.user.movies,
        likedMovies: req.user.likedMovies
    }
 
    res.status(200).json(user);
});

//@desc update user profile
//route PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if(user)
    {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.movies = req.body.movies || user.movies;
        if(req.body.password )
        {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            movies: updatedUser.movies,
            likedMovies: updatedUser.likedMovies

        })
    }
    else
    {
        res.status(404);
        throw new Error('User not found')
    }
    
});

const likeMovie = asyncHandler(async (req, res) =>{
    const user = await User.findById(req.user._id)
    const movieId = req.body.movie.movieId
    const movieDetails = req.body.movie
    const movie = await Movie.findById(movieId)
    if(user)
    {   
        user.likedMovies.push(movieDetails.movieId)
        const updatedUser = await user.save();

        if(movie)
        {
            movie.likes.push({userId : user._id, userName : user.name})
            
            const updatedMovie = await movie.save();
            

                res.status(200).json({
                    _id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    movies: updatedUser.movies,
                    likedMovies: updatedUser.likedMovies
        
                })
        }
        else
        {
            const updatedMovie = await Movie.create({
                _id:movieDetails.movieId,
                title: movieDetails.movieTitle,
                genres: movieDetails.genres,
                casts: movieDetails.casts,
                director: movieDetails.director[0],
                overview: movieDetails.overview,
                likes : [{userId: user._id, userName: user.name}],       
                comments : movieDetails.comments
            })
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                movies: updatedUser.movies,
                likedMovies: updatedUser.likedMovies
    
            })
        }


    }
    else
    {
        res.status(404);
        throw new Error('An error occured')
    }

})
const unlikeMovie = asyncHandler(async (req, res) =>{
    const user = await User.findById(req.user._id)
    const movieDetails = req.body.movie
    const movie = await Movie.findById(movieDetails.movieId)
    if(user)
    {    let updatedUser = {}
        const index = user.likedMovies.indexOf(movieDetails.movieId)
        if(index > -1)
        {
            user.likedMovies.splice(index, 1)
             updatedUser = await user.save();
        }
        else
        {
            res.status(404);
            throw new Error('An error occured')
        }

        if(movie)
        {
            const obj = movie.likes.find((obj) => (obj.userId.equals(user._id)))
            if(obj)
            {
                const index = movie.likes.indexOf(obj)
                movie.likes.splice(index, 1)
                const updatedMovie = await movie.save()
                res.status(200).json({
                    _id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    movies: updatedUser.movies,
                    likedMovies: updatedUser.likedMovies
        
                })
                
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
    authUser,
    getUserProfile,
    logoutUser,
    registerUser,
    updateUserProfile,
    unlikeMovie,
    likeMovie
}