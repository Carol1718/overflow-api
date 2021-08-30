const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    store(req, res) {
        const { nmae, email, password } = req.body;

        //verifica se o usuário já existe
         
        let user = await User.findOne({
            where: {
                email: email
            }
        })
        
        if (user){
            return res.status(400).send({ error: "Este e-mail já esta sendo utilizado"});
        }

        const passwordHashed = bcrypt.hashSync(password);

        user = await User.create({
            name: name,
            email: email,
            password: passwordHashed
        });

        res.send({
            user: {
                name: user.name,
                email: user.email
            }
        })
    }
}