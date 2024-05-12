import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get("privateKey")
const publicKey = config.get("publicKey")

export function signJwt(object,options){
    return jwt.sign(object, privateKey,{
        ...(options && options),
        algorithm: "RS256", //npm install jsonwebtoken@8.5.1로 설치 9.0이상은 오류남
    });
}

export function verifyJwt(token){
    try{
        const decoded = jwt.verify(token, publicKey);
        return{
            valid: true,
            expired: false,
            decoded,
        };
    } catch(e){
        console.error(e);
        return{
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null,
        };
    }
}