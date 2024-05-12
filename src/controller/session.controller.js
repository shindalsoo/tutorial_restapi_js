import config from "config";
import {
    createSession,
    findSessions,
    updateSession
} from "../service/session.service.js";
import { validatePassword } from "../service/user.service.js";
import { signJwt } from "../utils/jwt.utils.js";

export async function createUserSessionHandler(req,res){
    // 1. 아이디존재여부 및 비밀번호체크
    const user = await validatePassword(req.body);
    if (!user) return res.status(401).send("Invalid email or password");
    
    // 2. 세션DB에 Insert
    const session = await createSession(user._id, req.get("user-agent") || "");
    
    // 3. Access Token 생성
    const accessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTtl")} // 15분
    );

    // 4. Refresh Token 생성
    const refreshToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("refreshTokenTtl")} // 1 year
    );

    // 반환(access & refresh tokens)
    return res.send({accessToken, refreshToken});
}
export async function getUserSessionsHandler(req,res){
    const userId = res.locals.user._id;
    const sessions = await findSessions({user:userId, valid:true});
    return res.send(sessions);
}
export async function deleteSessionHandler(req,res){
    const sessionId = res.locals.user.session;
    await updateSession({_id: sessionId}, {valid:false});
    return res.send({
        accessToken: null,
        refreshToken: null,
    });
}