// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/Method')
// .then(()=>{
//     console.log("Connected")
// })
// .catch((ex)=>{

// console.log(ex.message);
// });


// const Author = mongoose.model('Author', mongoose.Schema({

//     name: String,
//     bio:String,
//     web:String
// }));

// const Course= mongoose.model('Course', mongoose.Schema({

//     name:String,
//     author:{
      
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Author'

//     }
// }));

// async function createAuthor(Name, Bio, Web){

//     const author= new Author({
//      name:Name,
//      bio:Bio,
//      web:Web

//     })
//     const result = await author.save();
//     console.log(result);
    
// }

// async function createCourse(Name, author_id){
//   const course= new Course({
//      name:Name,
//      author:author_id

//     })
//     const result = await course.save();
//     console.log(result);
// }

// async function displayCourse(){

//     const result = await Course.find().populate('author', '-name').select({name:1, author:1});
//     console.log(result);
// }

// // createAuthor("Anosha", "Teaching People", "www.yahoo.com");

// // createCourse("Anosha", "61b34686cdee56199098dbda" );

// // displayCourse();






