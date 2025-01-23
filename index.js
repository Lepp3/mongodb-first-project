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
    age: {
        type: Number,
        required: true,
        min: [18, 'Student age should be between 18 and 120 inclusive!'],
        max: 120
    },
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

// await Student.create({
//     name: 'Stefcho',
//     age: 22,
// });

// // can be taken as a variable

// const createdStudent = await Student.create({
//     name: 'Djefri',
//     age: 22
// });

// add aditional method

studentSchema.methods.getInfo = function (){
    return `I am ${this.name} and I am ${this.age} years old.`
};

const singleStudent = await Student.findOne({age:20}); //returns the first object that meets the criteria

console.log(singleStudent.getInfo());

//create custom validation

studentSchema.path('age').validate(function(age){
    return age >= 18 && age <=120;
}); //doesnt let you create students if age is not in the interval, works best with a try catch block



//update (modify) data default way

singleStudent.name = "Djordji";

await singleStudent.save();

//update #1

Student.updateOne({name: 'Marto', age: 25}, {name: 'Lubaka', age: 29}); // updates the first matched with the second parameter

//delete

await Student.deleteOne({name:'Lubaka'}); //deletes the first matched

await Student.findByIdAndDelete('id'); // deletes by id (most accurate)

