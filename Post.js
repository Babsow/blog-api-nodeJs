const router = require('express').Router();
const res = require('express/lib/response');
const post = require('../models/Post');
const { post, post } = require('./routes/Auth');


router.post('/', async (req, res)=> {

  try {
     const savePost = await new post(req.body);
     const savedPost = await savedPost.save();
     res.status(200).json(savePost);

  } catch(error) {
    res.status(500).json(error);
  }
} )


router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId) {
      await Post.updateOne({$set:req.body});
      res.status(200).json('Update done');
    } else {
      res.status(403).json('You can only aupdate your post');
    }
  } catch (error){
      res.status(500).json(error)
  }
})


router.delete('/:id', async (req, res)=> {
   try {
     const post = await Post.findById(req.params.id);
     if(post.userId === req.body.userId) {
       await Post.deleteOne();
       res.status(200).json('The post is deleted');
     }else {
       res.status(403).json("You can only delete your post");
     }
   }catch(error) {
     res.status(500).json(error)
   }
})

router.get('/', async (req, res)=> {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
})


router.get('/:id', async (req, res) => {

  try {
    const post = await Post.findById(req.body.id);
    res.status(200).json(post);
  } catch(error) {
    res.status(500).json(error);
  }
})

module.exports = router;