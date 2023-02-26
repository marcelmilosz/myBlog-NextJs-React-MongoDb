// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb'
import keys from '../../../mongoKeys.json'

async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })

  const { MONGO_URL } = `mongodb+ srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.ssb3kaa.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`


  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !name || name.trim === '' || !message || message.trim() === '') {
      res.status(422).json({ message: "Invalid input.. " });
      return;
    }

    const newMessage = {
      email,
      name,
      message
    };

    let client;

    try {
      client = await MongoClient.connect(
        MONGO_URL
      )
    }
    catch (error) {
      res.status(500).json({ message: "Could not connect to database!" })
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    }
    catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" })
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully stored message!', msg: newMessage })
  }
}

export default handler;