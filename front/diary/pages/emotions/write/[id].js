import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Post from '../../../components/Post/Post';
import { getPostByPostIdAPI } from '../../../lib/api/post';

const putPost = () => {
    const postId = useRouter().query.id;
    const [putPost, setPutPost] = useState(null)
    
	useEffect(() => {
        const fetchPostData = async () => {
            const res = await getPostByPostIdAPI(postId);
            const data = res.json();
            return data;
        }
        fetchPostData().then((data)=> {setPutPost(data)});
		// getPostByPostIdAPI(id).then((response) => {
		// 	const data = response.json();
        //     return data;
		// }).then((data) => console.log(data));
	}, [postId]);

	return <Post putPost={putPost}/>;
};

export default putPost;
