import db from '../models/db.js'; // Importing db from the updated db.js

const updateProgress = (req, res) => {
    const pid = req.params.id; // Get the id from the URL parameters
    console.log(`Updating progress for pid: ${pid}`); // Log the pid for debugging

    // SQL query to increment submoduleno and reset sectionno to 1
    const query = 'UPDATE progress SET submoduleno = submoduleno + 1, sectionno = 1 WHERE pid = ?';

    db.query(query, [pid], (err, result) => {
        if (err) {
            console.error('Error updating progress:', err); // Log the error for debugging
            return res.status(500).json({ error: 'Failed to update progress', details: err.message });
        }

        if (result.affectedRows === 0) {
            // No rows were updated, likely because pid doesn't exist
            return res.status(404).json({ error: `No record found with pid: ${pid}` });
        }

        // Success response
        return res.json({ message: 'Progress updated successfully', result });
    });
};


const toLearnIt =(req,res)=>{
    const pid = req.params.id; // Get the id from the URL parameters
    console.log(`Updating progress for pid: ${pid}`); // Log the pid for debugging  
    const query = 'UPDATE progress SET sectionno = 2 WHERE pid = ?';

    db.query(query, [pid], (err, result) => {
        if (err) {
            console.error('Error updating learnit progress:', err); // Log the error for debugging
            return res.status(500).json({ error: 'Failed to update progress', details: err.message });
        }

        if (result.affectedRows === 0) {
            // No rows were updated, likely because pid doesn't exist
            return res.status(404).json({ error: `No record found with pid: ${pid}` });
        }

        // Success response
        return res.json({ message: 'learnit Progress updated successfully', result });
    });
};

const toDoIt =(req,res)=>{
    const pid = req.params.id; // Get the id from the URL parameters
    console.log(`Updating progress for pid: ${pid}`); // Log the pid for debugging  
    const query = 'UPDATE progress SET sectionno = 3 WHERE pid = ?';

    db.query(query, [pid], (err, result) => {
        if (err) {
            console.error('Error updating learnit progress:', err); // Log the error for debugging
            return res.status(500).json({ error: 'Failed to update progress', details: err.message });
        }

        if (result.affectedRows === 0) {
            // No rows were updated, likely because pid doesn't exist
            return res.status(404).json({ error: `No record found with pid: ${pid}` });
        }

        // Success response
        return res.json({ message: 'learnit Progress updated successfully', result });
    });
};


const updateSubmoduleToOne =(req,res)=>{
    const pid = req.params.id; // Get the id from the URL parameters
    console.log(`Updating progress for pid: ${pid}`); // Log the pid for debugging  
    const query = 'UPDATE progress SET submoduleno = 1 WHERE pid = ?';

    db.query(query, [pid], (err, result) => {
        if (err) {
            console.error('Error updating learnit progress:', err); // Log the error for debugging
            return res.status(500).json({ error: 'Failed to update submoduleto initial', details: err.message });
        }

        if (result.affectedRows === 0) {
            // No rows were updated, likely because pid doesn't exist
            return res.status(404).json({ error: `No record found with pid: ${pid}` });
        }

        // Success response
        return res.json({ message: 'submodule no. setteled to initial successfully', result });
    });
};


export { updateProgress,toLearnIt,toDoIt,updateSubmoduleToOne }; // Using named export for updateProgress function
