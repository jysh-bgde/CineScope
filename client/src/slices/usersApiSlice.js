import { apiSlice } from './apiSlice';


const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation(
            {
                query: (data)=>({
                    url: `${USERS_URL}/auth`,
                    method: 'POST',
                    body: data
                })
            }
        ),
        signUp: builder.mutation(
            {
                query: (data)=>({
                    url: `${USERS_URL}`,
                    method: 'POST',
                    body: data
                })
            }
        ),
        updateUser: builder.mutation(
            {
                query: (data)=>({
                    url: `${USERS_URL}/profile`,
                    method: 'PUT',
                    body: data
                })
            }
        ),
        unlikeMovie: builder.mutation(
            {
                query: (data)=>({
                    url: `${USERS_URL}/movies/unlike`,
                    method: 'PUT',
                    body: data
                })
            }
        ),
        likeMovie: builder.mutation(
            {
                query: (data)=>({
                    url: `${USERS_URL}/movies/like`,
                    method: 'PUT',
                    body: data
                })
            }
        ),
        logout: builder.mutation(
            {
                query: () => (
                    {
                    url: `${USERS_URL}/logout`,
                    method: 'POST',   
                    })
           
            })

        })
    })


export const {useLoginMutation, useLogoutMutation, useSignUpMutation, useUpdateUserMutation, useUnlikeMovieMutation, useLikeMovieMutation } = usersApiSlice;
