const express = require('express');
const router = express.Router();
const User = require('../Model/user')
const auth = require('../auth/auth')

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
    const salt = auth.createSalt()
    const hash = auth.createHash(req.body.password + salt)
    const user = new User({
        name: req.body.name,
        salt: salt,
        hash: hash
    })
    try {
        const user1 = await user.save()
        res.send('User berhasil disimpan')
    } catch (error) {
        res.status(500).json("gagal menyimpan")
        console.log(error)
    }
}) 

router.put('/:id', async(req,res) => {
    const salt = auth.createSalt()
    const hash = auth.createHash(req.body.password + salt)
    try {
        const user = await User.findById(req.params.id)
        user.name = req.body.name
        user.salt = auth.createSalt()
        user.hash = auth.createHash(req.body.password + salt)
        const user1 = await user.save()
        res.send('User dengan id:' + req.params.id + ' berhasil diupdate')
    } catch (error) {
        res.status(500).send('User dengan id:' + req.params.id + ' gagal diupdate')
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
router.post('/auth', async(req,res) => {
    try{
        const user = await User.findOne({name: req.body.name})
        id = user.id
        if (auth.createHash(req.body.password + user.salt) === user.hash){
            res.status(200).send(user.id)
        }
        else throw auth.createHash("gagal login")
    }
    catch(err){
        res.status(401).send(err)
    }
})

module.exports = router