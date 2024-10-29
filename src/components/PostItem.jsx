import React, { useEffect, useState } from 'react';
import Post from './Post';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts.json')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error loading posts:', error));
    }, []);

    return (
        <div className="container">
            <h3 className='my-4 ubuntu-regular'>React Blog</h3>
            <p className="my-4 ubuntu-regular fw-light p1">
                This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the{' '}
                <a
                    href="https://twitter.com/reactjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link p-0 text-decoration-none"
                    style={{ color: '#007bff' }} 
                >
                    @reactjs
                </a>{' '}
                account on Twitter, but you won’t miss anything essential if you only read this blog.
            </p>

            <div className="container my-4">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        fullContent={post.fullContent}
                        author={post.author}
                        date={post.date}
                    />
                ))}
            </div>
        </div>
    );
}

