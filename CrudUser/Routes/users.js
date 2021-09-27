const express = require('express');
const router = express.Router();
const User = require('../Model/user')

router.get('/', async(req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.send('Error' + error)
    }
})

router.get('/:id', async(req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch(error){
        res.send('User dengan id:' + req.params.id + ' tidak dapat ditemukan')
    }
})

router.post('/', async(req,res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const user1 = await user.save()
        res.send('User berhasil disimpan')
    } catch (error) {
        res.send('User gagal disimpan')
    }
})

router.put('/:id', async(req,res) => {
    try {
        const user = await User.findById(req.params.id)
        user.name = req.body.name
        user.age = req.body.age
        const user1 = await user.save()
        res.send('User dengan id:' + req.params.id + ' berhasil diupdate')
    } catch (error) {
        res.send('User dengan id:' + req.params.id + ' gagal diupdate')
    }
})

router.delete('/:id',async(req,res) => {
    try {
        const user = await User.findById(req.params.id)
        await user.remove()
        res.send('User dengan id:' + req.params.id + ' berhasil dihapus')
    } catch (error) {
        res.send('User dengan id:' + req.params.id + ' gagal dihapus')
    }
})


module.exports = router