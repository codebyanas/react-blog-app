import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Post({ title, content, fullContent, date }) {
  const [showFullPost, setShowFullPost] = useState(false);

  return (
      <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text p1">
          <small className="text-body-secondary fw-lighter">{date}</small>
        </p>
        {showFullPost ? (
          <p
            className="card-text fw-light p1"
            dangerouslySetInnerHTML={{ __html: fullContent }}
          />
        ) : (
          <p className="card-text fw-light p1">{content}</p>
        )}
        <button
          className="btn btn-link p-0 text-decoration-none"
          onClick={() => setShowFullPost(!showFullPost)}
        >
          {showFullPost ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  fullContent: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
