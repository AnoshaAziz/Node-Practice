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


// // const Author = mongoose.model('Author',authorSchema );

// const Course= mongoose.model('Course', mongoose.Schema({

//     name:String,
//     author:{
      
//         type: authorSchema

//     }
// }));

// async function createCourse(Name, authorObj){
//   const course= new Course({
//  name: Name,
//    author: authorObj

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
//     // console.log(result);
// }

// // createCourse("Anosha", {name:"Anosha", bio: "Worker", web:"http:www.hhh.com"} );


// // updateAuthor("61b36ac8b046b4280acaad35");





