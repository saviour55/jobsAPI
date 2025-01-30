const { Op } = require('sequelize');
const { Jobs } = require('../models/jobsmodel');
const { User } = require('../models/usermodel');
// POST
async function addJobs(req, res) {
  const { title, description, company, salary } = req.body;
  //console.log(req.user)

  const { userId } = req.user
  try {

    const response = await Jobs.create({ userId, title, description, company, salary });
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
  }
}

// Get for one 
const getJobsForUser = async (req, res) => {
  try {
    const { userId } = req.user
    const userWithJobs = await Jobs.findAll({
      where: { userId },
    });

    res.status(200).json({ userWithJobs });
  } catch (error) {
    console.error('Error fetching jobs for user:', error);
    throw error;
  }
};

// Get jobs for all users
async function getJobs(req, res) {
  try {
    const { id } = req.params;
    const response = await Jobs.findAll();
    if (id) {
      const response = await Jobs.findAll({
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      });
      return res.status(200).json({ response });
    }
    // console.log(response);
    return res.status(200).json({ response });
  } catch (error) {
    console.error(error);
  }
}

async function deleteJob(req, res) {
  const { id } = req.params;
  const response = await Jobs.destroy({
    where: {
      id: id
    },
  });
  return res.status(200).json({ message: 'Jobs deleted scessfully', response });
}

async function updateJob(req, res) {
  const { title, description, company, salary } = req.body;
  const { id } = req.params;
  const { userId } = req.user
  const response = await Jobs.update(
    {
      userId: userId,
      title: title,
      description: description,
      company: company,
      salary: salary,
    },
    {
      where: {
        id: id
      },
    }
  );
  return res.status(200).json({ response });
}
// async function getAJob(req, res) {}
module.exports = { addJobs, getJobs, deleteJob, updateJob, getJobsForUser };