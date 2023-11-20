const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Get Route Called')
})

router.get('/',(req,res)=>{
    res.send('Get Route Called query -->',req.query )
})


router.post('/',(req,res)=>{
    res.send('Post Route Called')
})


router.put('/:id',(req,res)=>{
    res.send('Put Route Called id is-->', req.params.id)
})


router.delete('/:id',(req,res)=>{
    res.send('Delete Route Called id is-->', req.params.id  )
})


module.exports = router
 