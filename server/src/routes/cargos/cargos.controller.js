const {getAllRoles, saveRole} =require('../../models/cargo.model');

async function httpGetAllPosts(req, res) {
    const posts = await getAllRoles();
    return res.status(200).json(posts);
}

async function httpAddNewPost(req, res) {
    const post = req.body;
    await saveRole(post);
    res.json(post)
}

module.exports = {
    httpAddNewPost,
    httpGetAllPosts,
}