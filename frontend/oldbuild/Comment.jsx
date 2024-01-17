import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  IconButton,
  HStack,
  Avatar,
  Button,
  Link,
} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon, LinkIcon } from '@chakra-ui/icons';

function Comment({ comment }) {
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const [showChildComments, setShowChildComments] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const childCommentsStyle = {
    marginLeft: '20px', // Adjust the indentation as needed
    borderLeft: '1px solid #ccc', // Add a border for indentation effect
    paddingLeft: '10px', // Padding to separate child comments
  };

  // Function to detect links in the comment text
  const detectLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = text.match(urlRegex);

    if (matches) {
      return matches.map((url, index) => (
        <Link key={index} href={url} isExternal color="teal.500" textDecor="underline" fontWeight="bold">
          {url}
          <LinkIcon mx="2px" />
        </Link>
      ));
    }

    return text;
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding="1rem"
      maxW={{ base: '100%', md: '600px' }}
    >
      <HStack spacing={4} align="center">
        <Avatar size="sm" src="/path-to-comment-avatar.jpg" alt="Comment Author" />
        <Heading as="h3" fontSize={{ base: 'sm', md: 'md' }}>
        {detectLinks(comment.text)}
        </Heading>
      </HStack>
      <HStack spacing={2} mt={2} align="center">
        <IconButton
          aria-label="Like"
          icon={<ArrowUpIcon />}
          onClick={handleLike}
        />
        <span>{likes}</span>
        <IconButton
          aria-label="Dislike"
          icon={<ArrowDownIcon />}
          onClick={handleDislike}
        />
        <span>{dislikes}</span>
        {comment.childComments.length > 0 && (
          <Button
            size="xs"
            onClick={() => setShowChildComments(!showChildComments)}
          >
            {showChildComments ? 'Hide Replies' : 'Show Replies'}
          </Button>
        )}
        {comment.link && (
          <Link href={comment.link} isExternal>
            <LinkIcon />
          </Link>
        )}
      </HStack>
      {showChildComments && (
        <Box mt={2}>
          {comment.childComments.map((childComment) => (
            <Comment key={childComment.id} comment={childComment} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Comment;
