// API Service - Example API calls using JSONPlaceholder as a mock REST API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// --- Users ---

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
}

export async function getUserById(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch user ${id}`);
  return response.json();
}

// --- Posts ---

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

export async function getPostById(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch post ${id}`);
  return response.json();
}

export async function createPost(data) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create post');
  return response.json();
}

export async function updatePost(id, data) {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`Failed to update post ${id}`);
  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error(`Failed to delete post ${id}`);
  return { success: true, id };
}

// --- Comments ---

export async function getCommentsByPost(postId) {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  if (!response.ok) throw new Error(`Failed to fetch comments for post ${postId}`);
  return response.json();
}

// --- Todos ---

export async function getTodos() {
  const response = await fetch(`${BASE_URL}/todos`);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
}

export async function getTodoById(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch todo ${id}`);
  return response.json();
}
