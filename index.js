// MONGODB DEFAULT LANGUAGE
// import { MongoClient } from 'mongodb';

// const uri = 'mongodb://localhost:27017';

// const client = new MongoClient(uri);


// try{
//     await client.connect();
//     console.log('connected, good job');
// }catch(err){
//     console.error('Could not connect');
//     console.log(err.message);
// };

// const db = client.db('studentsDb');

// const collection = db.collection('students');

// const result =  await collection.find().toArray();


// console.log(result);


//MONGOOSE APPROACH

import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const uri = 'mongodb://localhost:27017/studentsDb';


try{
    await mongoose.connect(uri);
    console.log('Connected Successfully');
}catch(err){
    console.error('Could not connect');
    console.log(err.message);
};

//mongoose schema

const studentSchema = new Schema({
    name: String,
    age: Number,
});

// mongoose model

const Student = model('Student', studentSchema);

const students = await Student.find();

console.log(students);

