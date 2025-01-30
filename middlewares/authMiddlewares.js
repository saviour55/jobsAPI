const jwt = require('jsonwebtoken');
require('dotenv').config()



const auth = (req, res, next) => {
    try{
        const token = req.headers.authorization?.split(' ')[1]
        console.log(token)

        if(!token) {
            return res.status(400).json({message: 'User not logged In'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
        req.user = decoded
        next()

    } catch(error){
        res.status(500).json(error)
    }
}


module.exports = {auth}


// try {
//     // Check if the Authorization header is present
//     if (!req.headers.authorization) {
//         return res.status(401).json({ message: 'Authorization header missing' });
//     }

//     // Extract the token from the Authorization header
//     const token = req.headers.authorization.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ message: 'User not logged in' });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
//     req.user = decoded;

//     // Call the next middleware or route handler
//     next();
// } catch (error) {
//     // Handle specific JWT errors
//     if (error.name === 'TokenExpiredError') {
//         return res.status(401).json({ message: 'Token expired' });
//     } else if (error.name === 'JsonWebTokenError') {
//         return res.status(401).json({ message: 'Invalid token' });
//     } else {
//         // For other errors, return a generic error message
//         return res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// }
// };