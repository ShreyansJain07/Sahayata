import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  VStack,
  Button,
  Input,
  Text,
  IconButton,
  Card,
  Spinner,
} from '@chakra-ui/react';
import Post from './Post';
import ReqMak from '../src/components/ReqMak'
function ForumApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth-token'));

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const axiosConfig = {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            'auth-token': authToken,
          },
        };

        const response = await axios.get(
          'http://localhost:5000/api/forum/getallposts',
          axiosConfig
        );

        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [authToken]);

  const handleCreatePost = async () => {
    try {
      const axiosConfig = {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          'auth-token': authToken,
        },
      };

      const response = await axios.post(
        'http://localhost:5000/api/forum/createpost',
        newPost,
        axiosConfig
      );

      setPosts([...posts, response.data]);
      setNewPost({ title: '', content: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card>
      <Box p={4}>
        <ReqMak/>
        <VStack spacing={4} align="stretch">
          <Input
            placeholder="Title"
            value={newPost.title}
            onChange={(e) =>
              setNewPost({ ...newPost, title: e.target.value })
            }
          />
          <Input
            placeholder="Content"
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
          />
          <Button colorScheme="teal" onClick={handleCreatePost}>
            Submit Post
          </Button>
          {loading ? (
            <Spinner size="xl" />
          ) : (
            <Card>
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </Card>
          )}
        </VStack>
      </Box>
    </Card>
  );
}

export default ForumApp;
