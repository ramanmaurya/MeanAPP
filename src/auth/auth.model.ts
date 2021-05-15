import * as mongoose from "mongoose";

export const authuserloginCredentialSchema=new mongoose.Schema({
    user_name:{type:String,required:true},
    user_email:{type:String,required:true},
    user_passowrd:{type:String,required:true},
});
export interface AuthuserloginCredential{
    user_name:string,   user_email:string,   user_passowrd:string,  
}