Design database for Zen class Programmer
users
codekata
attendance
topics
tasks
company_drives
mentors


Find all the topics and tasks which are thought in the month of October
Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
Find all the company drives and students who are appeared for the placement.
Find the number of problems solved by the user in codekata
Find all the mentors with who has the mentee's count more than 15
Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

// Creating Zen Classes DataBase

use zen_class

//users collection
db.users.insertMany([
  {
  id:1,
  student_name:"sanjeev",
  student_email:"sanjeev@gmail.com",
  student_gender:"male"
  },
  {
  id:2,
  student_name:"sanju",
  student_email:"sanju@gmail.com",
  student_gender:"male"
  },
  {
  id:3,
  student_name:"sarika",
  student_email:"sarika@gmail.com",
  student_gender:"female"
  },
  {
  id:4,
  student_name:"rakshita",
  student_email:"rakshita@gmail.com",
  student_gender:"female"
  },
  {
  id:5,
  student_name:"smruti",
  student_email:"smruti@gmail.com",
  student_gender:"female"
  }
]);

//codekata collection

db.codekata.insertMany([
{

}

]);

