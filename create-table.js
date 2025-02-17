import { sql } from './db.js'

sql`
	CREATE TABLE public.videos (
		id TEXT PRIMARY KEY,
		title TEXT,
		description TEXT,
		duration INT
	);
`.then(() => {
	console.log('tabela criada')
})