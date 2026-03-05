import { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import './DashboardPage.css';

function DashboardPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data.slice(0, 9)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p className="dashboard-subtitle">
        Sample posts fetched from{' '}
        <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">
          JSONPlaceholder
        </a>
      </p>

      {loading && <p className="dashboard-status">Loading posts…</p>}
      {error && <p className="dashboard-status dashboard-error">Error: {error}</p>}

      {!loading && !error && (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <span className="post-id">#{post.id}</span>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
