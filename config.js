import {config} from 'dotenv'

config()

export const DB = process.env.DATABASE_URL 
export const PORT = process.env.PORT