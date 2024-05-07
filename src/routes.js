const apiUrl = "http://localhost:8080/api";

export default {
    registerPath: () => [apiUrl, "auth", "register"].join("/"),
    authPath: () => [apiUrl, "auth", "login"].join("/"),
    getUserById: (id) => [apiUrl, "v1.1", "users", id].join("/"),
    getAllUsers: () => [apiUrl, "users"].join("/"),
    allUser: (token) => [apiUrl, "users", token].join("/"),
    allPost: () => [apiUrl, "v1.1", "posts"].join("/"),
    updatePost: (id) => [apiUrl, "v1.1", "posts", id].join("/"),
    getPostsById: (id) => [apiUrl, "v1.1", "posts", id].join("/"),
    getPostsByUserId: (id) => [apiUrl, "v1.1", "posts", "user", id].join("/"),
    createPost: (token) => [apiUrl, "v1.1", "posts"].join("/"),
    categoriesPost: (id) => [apiUrl, "posts", id, "categories", "aboba"].join("/"),
    commentsPost: (id) => [apiUrl, "posts", id, "comments", "aboba"].join("/"),
    createPostComment: () => [apiUrl, "v1.1", "comments"].join("/"),
    getPhoto: (name) => ["http://localhost:8080", "avatars", name].join("/"),
    createPostLike: (id) => [apiUrl, "v1.1", "posts", id, "like"].join("/"),
    createCommentLike: (id) => [apiUrl, "v1.1", "comments", id, "like"].join("/"),
};
