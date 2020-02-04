const PostsModel = require('../models/posts')

exports.index = (req, res) => {
    PostsModel
    .findAll()
    .then((success) => {
        res.json({
            status:200,
            message: success
        })
    })
    .catch((error) => {
        console.log(error);
        res.json({
            status:400,
            message: 'An error occured'
        })
    })
}

exports.add = (req, res) => {

    var postData = req.body;
    console.log(postData);

    PostsModel
    .findOrCreate({
        where: {
            title: postData.title
        },
        defaults: postData
    })
    .then((success) => {
        console.log('success', success);
        res.setHeader('Content-Type', 'application/json');
        res.json({
            status: 200,
            message: 'Post Created Successfully'
        });
    })
    .catch((error) => {
        console.log('error', error);
        res.send({
            status: 400,
            message: 'An error occured!'
        });
    })
}

exports.view = (req, res) => {
    var postData = req.body;

    PostsModel
    .findOne({
        where: {
            id: postData.id
        }
    })
    .then((success) => {
        res.json({
            status: 200,
            message: success
        })
    })
    .catch((error) => {
        res.json({
            status: 400,
            message: 'An error occured'
        })
    })
}


exports.update = async (req, res) => {
    var postData = req.body;

    await PostsModel
    .update(
        postData,
        {where:{
            id:1
        }},
    )
    .then((success) => {
        console.log('success', success)
        res.json({
            status: 200,
            message: 'Post updated successfully'
        })
    })
    .catch((error) => {
        res.json({
            status: 400,
            message: 'An error occured'
        })
    })

}

exports.delete = (req, res) => {
    var postData = req.body;
    
    PostsModel
    .destroy({
        where: postData
    })
    .then((success) => {
        console.log('success', success)
        res.json({
            status: 200,
            message: 'Post deleted successfully'
        })
    })
    .catch((error) => {
        res.json({
            status: 400,
            message: 'An error occured'
        })
    })

}