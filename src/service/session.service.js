import config from "config";
import pkg from 'lodash';
import SessionModel from "../models/session.model.js";
import { signJwt, verifyJwt } from "../utils/jwt.utils.js";
import { findUser } from "./user.service.js";

const { get } = pkg;

export async function createSession(userID,userAgent){
    const session = await SessionModel.create({user:userID,userAgent});

    return session.toJSON();
}
export async function findSessions(query){
    return SessionModel.find(query).lean(); //lean()은 인스턴스가 아닌 POJO(Plain Old Javascript Object)를 리턴해서 필요 없는 데이터를 함께 반환하지 않으니 속도 빠름
}
export async function updateSession(query,update){
    return SessionModel.updateOne(query,update);
}

export async function reIssueAccessToken({refreshToken}){
    const {decoded} = verifyJwt(refreshToken);
    if (!decoded || !get(decoded, "session")) return false;
    const session = await SessionModel.findById(get(decoded,"session"));
    if (!session || !session.valid) return false;
    const user = await findUser({_id:session.user});
    if (!user) return false;
    const accessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTtl")} //15분
    );
    return accessToken;
};