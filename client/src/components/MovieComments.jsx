import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa'

const MovieComments = ({ movie, comments, setComments }) => {

    const { userInfo } = useSelector((state) => state.auth);

    const [comment, setComment] = useState("")
    // const [comments, setComments] = useState([])
    // const [loadingComments, setLoadingComments] = useState(true)
    useEffect(() => {

        setComments(movie.comments)
        
        return () => {
            setComments([])
        }
    }, [movie.comments])


    // useEffect(() => {

    //     async function loadComments() {
    //         try {
    //             const response = await axios.get(`/api/movies/${movie.movieId}/movieComments`)
    //             const comments = response.data.comments

    //             setComments(comments)
    //             //no comments is also ok
    //             setLoadingComments(false)

    //         } catch (err) {
    //             setLoadingComments(false)
    //         }
    //     }

    //     loadComments()

    //     return () => {
    //         setComment("")
    //         setComments([])
    //     }

    // }, [movie.movieId])


    async function handleAddMovieComment(e) {
        e.preventDefault();
        try {
            if (!comment) {
                toast.error("comment cant be empty")
            }
            else {
                const response = await axios.post(`/api/movies/${movie._id}/addMovieComment`, { ...movie, comment: comment })

                setComments(response.data.comments)
                setComment("")

                toast.success("Comment added")
            }
        } catch (err) {
            toast.error(err?.data?.message || err?.error)
        }
    }

    function formatDate(date) {
        const d = new Date(date);
        return d.toUTCString()
    }

    async function handelDeleteMovieComment(e, comment) {
        try {
            const response = await axios.delete(`/api/movies/${movie._id}/deleteMovieComment`, { data: { ...movie, comment: comment } })

            setComments(response.data.comments)

            toast.success("Comment deleted")

        } catch (err) {

            toast.error("Error deleting comment" || err?.data?.message || err?.error)
        }

    }


    return (
        <Container className='commentsContainer'>
            <Row>
                <Col>
                    <Row style={{ color: "#ff6f00", fontWeight: "bold", borderBottom: "2px solid rgb(99, 100, 100)" }}>
                        <Col>
                            <h2>Comments </h2>
                        </Col>
                        <Col>
                            <span style={{ height: "auto", fontSize: "1.5rem" }}><FaCommentDots size={30} /> {comments?.length}</span>
                        </Col>
                        <Row >
                            <Col md={true} className='my-2'  >
                                <textarea
                                    className='commentTextArea'
                                    name="comment"
                                    placeholder='enter comment'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </Col>
                            <Col md={true} >
                                <Button type='submit' variant='one' className='my-3 addCommentButton' onClick={handleAddMovieComment}>
                                    Add comment
                                </Button>
                            </Col>
                        </Row>
                    </Row>
                    {
                        comments ? (comments.map((comment, index) => (
                            <Row key={comment._id || index} style={{ color: "#ff6f00", fontWeight: "bold", borderBottom: "2px solid rgb(99, 100, 100)" }}>
                                <Col>
                                    <span style={{ color: "#ff6f00", fontWeight: "bold" }}> {comment.userName}:</span><span style={{ color: "white", fontWeight: "normal" }}> {comment.comment}</span>
                                </Col>
                                <Col style={{ fontWeight: "normal", verticalAlign: "center" }}>
                                    <span > {formatDate(comment.time)}</span>
                                </Col>
                                <Col className="deleteCommentIcon">
                                    {comment.userId == userInfo._id ? (
                                        <AiFillDelete size={30} onClick={(e) => handelDeleteMovieComment(e, comment)} />
                                    ) : ("")}
                                </Col>
                            </Row>
                        ))) :
                            (
                                <span> Loading comments...</span>
                            )
                    }



                </Col>
            </Row>

        </Container>
    )
}

export default MovieComments