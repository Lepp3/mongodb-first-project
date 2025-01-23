import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);


try{
    await client.connect();
    console.log('connected, good job');
}catch(err){
    console.error('Could not connect');
    console.log(err.message);
};

const db = client.db('studentsDb');

const collection = db.collection('students');

const result =  await collection.find().toArray();


console.log(result);