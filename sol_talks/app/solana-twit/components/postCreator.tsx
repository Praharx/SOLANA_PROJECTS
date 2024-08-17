import React, { useState } from 'react';

const PostCreator = () => {
  const [postContent, setPostContent] = useState('');
  const [tweetTitle, setTweetTitle] = useState('');
  const [isPostingEnabled, setIsPostingEnabled] = useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setPostContent(content);
    setIsPostingEnabled(content.trim().length > 0);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTweetTitle(title);
  };

  const handlePost = () => {
    if (postContent.trim()) {
      // Here you would typically send the post to your backend
      console.log('Posting:', { title: tweetTitle, content: postContent });
      // Reset the input fields after posting
      setPostContent('');
      setTweetTitle('');
      setIsPostingEnabled(false);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex-shrink-0"></div>
        <div className="flex-grow">
          <input
            type="text"
            className="w-full bg-transparent text-white text-sm mb-2 outline-none"
            placeholder="Title"
            value={tweetTitle}
            onChange={handleTitleChange}
          />
          <textarea
            className="w-full bg-transparent text-white text-xl resize-none outline-none"
            placeholder="What is happening?"
            rows={3}
            value={postContent}
            onChange={handleContentChange}
          />
         
        </div>
        <div className="mt-8">
          <button className="w-full bg-twitter-blue text-white py-3 px-4 rounded-full hover:bg-blue-600 font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;
