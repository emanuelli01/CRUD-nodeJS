import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory

server.post('/videos', (request, reply) => {
    const {title, duration} = request.body
    database.create({
        title : title,
        duration : duration
    })
    console.log(database.list())

    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'Sou um nodo'
})
 
server.put('/videos/:id', () => {
    return 'OIoioi'
})

server.delete('/videos/:id', () => {
    return 'OIoioi'
})

server.listen({
    port: 3333,
})