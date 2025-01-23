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


// Query all data from model
const students = await Student.find();

console.log(students);

// Query filtered students

const filteredStudents = await Student.find({age:20});
console.log(filteredStudents);

//insert data into DB #1

// const newStudent = new Student({
//     name: 'Marto',
//     age: 25
// });

// await newStudent.save();

//insert data into DB #2

await Student.create({
    name: 'Stefcho',
    age: 22,
});

// can be taken as a variable

const createdStudent = await Student.create({
    name: 'Djefri',
    age: 22
});
