// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/Embedded')
// .then(()=>{
//     console.log("Connected")
// })
// .catch((ex)=>{

// console.log(ex.message);
// });

// const authorSchema= mongoose.Schema({
//     name: String,
//     bio:String,
//     web:String
// })


// const Author = mongoose.model('Author',authorSchema );

// const Course= mongoose.model('Course', mongoose.Schema({

//     name:String,
//     authors:{
      
//         type: [authorSchema]

//     }
// }));

// async function createCourse(Name, authorObj){
//   const course= new Course({
//  name: Name,
//    authors: authorObj

//     })
//     const result = await course.save();
//     console.log(result);
// }

// async function updateAuthor(id){

//     const result = await Course.findByIdAndUpdate(id,{

//         $unset:{

//             "author" :""
//         }
//     }, {new:true})
//     console.log(result);
// }

// async function addAuthor(courseId,authorParam){

//     const course=await Course.findById(courseId);
//     course.authors.push(authorParam);
//     course.save();
// }

// async function removeAuthor(courseId, authorId){

//     const course=await Course.findById(courseId);
//    const result=course.authors.id(authorId);
//    result.remove();
//    course.save();

// }

// // createCourse("Anosha",[ new Author({name:"Ayesha"}),new Author({name:"Ali"})] );
// // updateAuthor("61b36ac8b046b4280acaad35");

// // addAuthor("61b374ec4ad43dc43630f7d1", new Author({name:"Ariana"}));

// removeAuthor("61b374ec4ad43dc43630f7d1","61b374ec4ad43dc43630f7d0");



