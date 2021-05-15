import * as mongoose from "mongoose";

export const userloginCredentialSchema=new mongoose.Schema({
    user_name:{type:String,required:true},
    user_email:{type:String,required:true},
    user_passowrd:{type:String,required:true},
});
export interface userloginCredential{
    user_name:string,   user_email:string,   user_passowrd:string,  
}