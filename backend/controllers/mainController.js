import db from '../models/db.js';  // Importing db from the updated db.js


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

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json(result[0]);
        
        });
        




}

export { profile };  // Using named export for signup function
