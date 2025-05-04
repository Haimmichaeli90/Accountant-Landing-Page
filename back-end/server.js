const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')
const emailRoutes = require('./routes/email.route')
const path = require('path')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

const isProduction = process.env.NODE_ENV === 'production'

const corsOptions = {
    origin: [
        'http://127.0.0.1:5173',
        'http://localhost:5173',
        'http://127.0.0.1:3030',
        'http://localhost:3030',
    ],
    credentials: true,
}



if (!isProduction) {
    app.use(cors(corsOptions))
}

app.use(express.json())
app.use((req, res, next) => {
    console.log('📥 Incoming request:', req.method, req.originalUrl)
    next()
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err))

const testimonialSchema = new mongoose.Schema({
    name: String,
    text: String,
    createdAt: { type: Date, default: Date.now }
})
const Testimonial = mongoose.model('Testimonial', testimonialSchema)

const testimonialLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: { error: 'ניסית יותר מדי פעמים, אנא המתן רגע...' }
})

app.use('/api', emailRoutes)

app.post('/api/testimonials', testimonialLimiter, async (req, res) => {
    try {
        const { name, text } = req.body
        const newTestimonial = new Testimonial({ name, text })
        await newTestimonial.save()
        res.status(201).json(newTestimonial)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error saving testimonial' })
    }
})

app.get('/api/testimonials', async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 })
        res.json(testimonials)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error fetching testimonials' })
    }
})

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
