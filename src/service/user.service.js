import UserModel from "../models/user.model.js";

export async function createUser(input){
    try{
        const user = await UserModel.create(input)
        return user.toJSON();
    }catch(e){
        throw new Error(e);
    }
}

export async function validatePassword({email,password}){
    // 1. 사용자존재 여부 확인
    const user = await UserModel.findOne({email});
    if (!user) return false;

    // 2. 비밀번호 체크
    const isValid = await user.comparePassword(password);
    if (!isValid) return false;

    return (user.toJSON());
};

export async function findUser(query){
    return UserModel.findOne(query).lean();
}