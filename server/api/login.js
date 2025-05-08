import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const uri = config.MONGO_URI
  const dbName = config.MONGO_DB_NAME

  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    return { status: 'error', message: 'Email and password are required.' }
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db(dbName)
    const users = db.collection('users')

    const user = await users.findOne({ email })

    if (!user) {
      return { status: 'error', message: 'Invalid email or password.' }
    }

    if (user.password !== password) {
      return { status: 'error', message: 'Invalid email or password.' }
    }

    return {
      status: 'success',
      message: 'Login successful.',
      user: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      }
    }
  } catch (err) {
    console.error(err)
    return { status: 'error', message: 'Server error.' }
  } finally {
    await client.close()
  }
})
