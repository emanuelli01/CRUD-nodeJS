import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class DatabasePostgres {

    async list(search){
        let videos

        if (search){
            videos = await sql`SELECT * FROM public.videos WHERE title ilike ${'%' + search + '%'}`
        } else {
            videos = await sql`SELECT * FROM public.videos`
        }

        return videos
    }

    async create(video) {
        const videoId = randomUUID()

        const { title, description, duration} = video

        await sql`INSERT INTO public.videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration});
        `
        
    }

    async update(id, video) {
        const {title, description, duration} = video

        await sql`
        UPDATE public.videos
        SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id};`
    }

    async delete(id) {

        await sql`
        DELETE FROM public.videos WHERE id = ${id};
        `
    }
}