import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/',(req,res)=>{
    res.send("App is running mitaaaaaaaaaa")
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=>{
        return p._id === req.params.id
    })
    res.json(product)
})

const PORT = process.env.PORT
app.listen(PORT,console.log(`Server running in port ${PORT} on ${process.env.NODE_ENV} mode`));