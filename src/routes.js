// import Express from "express"
import {createUserHandler} from "./controller/user.controller.js";
import {
    createUserSessionHandler,
    getUserSessionsHandler,
    deleteSessionHandler,
} from "./controller/session.controller.js"
import fs from "fs"

const shindalsoo1 = (res,req,next) => {
    next();
}
const shindalsoo2 = (res,req,next) => {
    next();
}

function routes(app) {
  // 헬스체크
  app.get("/api/healthcheck",(req,res)=>res.sendStatus(200));
    
  // API문서 JSON 보기
  app.get("/api/postman_collection",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./postman_collection.json","utf8"));
    res.header("Content-Type",'application/json');
    res.send(data)
  })
    
  // 사용자등록
  app.post("/api/users",shindalsoo1,shindalsoo2,createUserHandler)

  // 세션
  app.post("/api/sessions",createUserSessionHandler) //생성
  app.get("/api/sessions",getUserSessionsHandler)  //얻기
  app.delete("/api/sessions",deleteSessionHandler) //삭제
}

export default routes;