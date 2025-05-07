// server/api/signup.js

import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const uri = config.MONGO_URI
  const dbName = config.MONGO_DB_NAME

  const body = await readBody(event)
  const { email, password, first_name, last_name } = body

  if (!email || !password) {
    return { status: 'error', message: 'Email and password are required.' }
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db(dbName)
    const users = db.collection('users')

    const existing = await users.findOne({ email })
    if (existing) {
      return { status: 'error', message: 'Email already registered.' }
    }

    await users.insertOne({ email, password, first_name, last_name }) // You should hash this in real apps

    return { status: 'success', message: 'User registered successfully.' }
  } catch (err) {
    console.error(err)
    return { status: 'error', message: 'Server error.' }
  } finally {
    await client.close()
  }
})
