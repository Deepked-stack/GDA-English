import db from '../models/db.js';  // Importing db from the updated db.js
import bcrypt from 'bcryptjs';  // Your bcrypt import stays the same
import { error } from 'console';  // Your error import stays the same

const signup = (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Error Hashing password' });
    }

    const query = 'INSERT INTO students (name, email, password) VALUES (?,?,?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating user' });
      }
      res.status(201).json({
        message: 'User Registered Successfully',
        userId: result.insertId,
      });
    });
  });
};


const login = (req,res)=>{
    const {email,password} =req.body;
    console.log(req.body);

    const query= 'SELECT * from students Where email = ?';
    db.query(query,[email],(err,result)=>{
        if(err){
            return res.status(500).json({error: 'error Fetching User'});
        }

        if(result.length ===0){
            return res.status(404).json({error:'User not Found'});
        }

        bcrypt.compare(password,result[0].password,(err,isMatch)=>{
            if(err){
            return res.status(500).json({error: 'error Comparing Password'});

            }

            if(!isMatch){
                return res.status(401).json({error: 'Invalid Credentials'});
            }


            res.status(200).json({
                message: 'Login Successful',
                userId: result[0].id, 
                result: result[0].username
            });

        });


    });
}


const profile = (req,res)=>{
  const id =req.params.id;
  console.log(req.id);

  const query= 'SELECT * FROM students Where id = ?';
  
  db.query(query,[id],(err,result)=>{
      if(err){
          return res.status(500).json({error: 'error Fetching User'});
      }

      if(result.length ===0){
          return res.status(404).json({error:'User not Found'});
      }

         return res.status(200).json(result[0]);

      });
      




}

export { signup,login };  // Using named export for signup function
