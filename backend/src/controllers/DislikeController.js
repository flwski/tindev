const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){        
        const {devId} = req.params;
        const {user} = req.headers;

        const loggedev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(404).json({error:'Dev not exists'});
        }

        loggedev.dislikes.push(targetDev._id);

        await loggedev.save();

        return res.json(loggedev);
    }
}