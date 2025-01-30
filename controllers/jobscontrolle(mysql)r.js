const { databaseconfig } = require("../database/configuration")


const addjobs = async(req, res) => {
    try{
        const {title, description, company, salary} = req.body
        console.log(title, description, company, salary)
        const sql = 'INSERT INTO jobs (title, description, company,salary) VALUES (?, ?, ?, ?)';
        await databaseconfig.execute(sql, [title, description, company, salary])
        res.status(200).json({message: 'Job added sucessfully'})
    } catch(error) {
        res.status(500).json({message: `INternal server error, ${error.message}`})
    }
    
  };

const viewjobs = async(req, res)=>{
  try{
 
    const sql = 'SELECT * FROM jobs;'
    const listofjobs = await databaseconfig.execute(sql)
    res.status(200).json(listofjobs)
} catch(error) {
    res.status(500).json({message: `INternal server error, ${error.message}`})
}
}

    const getJobs = async(req, res) => {
        try {
          const sql = 'SELECT * FROM jobsapi';
          const [jobs] = await db.query(sql); 
          res.status(200).json(jobsapi);
        } catch (error) {
          res.status(500).json({ message: 'Internal server error, ${error.message}' });
        }
      };

   const updatejobs = async(req, res)=>{
    try{
      console.log('description')
        const {id} = req.params 
        const {title, description, company, salary} = req.body
        const sql = 'UPDATE jobsapi SET title = $1, description = $2, company = $3, salary = $4 WHERE id = $5'
        await databaseconfig.execute(sql, [title, description, company, salary, id])
        res.status(200).json({message: 'job updated successfully'})
    }catch (error){
        res.status(500).json({message: 'Internel server error', error: error.message})
       
    }
   }


const deletejobs =async  (req, res)=>{
    try{
     const {id} = req.params
     const sql = 'DELETE FROM jobsapi WHERE id = $1'
     await databaseconfig.execute(sql, [id])
     res.status(200).json({message: 'job delected successfully'})
    }catch (error){
        res.status(500).json({message: 'Internel server error', error: error.message})
    }
    
}

module.exports = {addjobs, viewjobs, updatejobs,deletejobs}