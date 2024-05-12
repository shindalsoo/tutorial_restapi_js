import { createUser } from "../service/user.service.js";
import logger from "../utils/logger.js";

export async function createUserHandler(req,res) {
    try {
        const user = await createUser(req.body);
        // return res.send(user)
        return res.status(200).send("success");
    } catch(e){
        logger.error(e);
        return res.status(409).send(e.message);
    }
}