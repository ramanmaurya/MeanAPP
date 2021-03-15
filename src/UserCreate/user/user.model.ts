import * as mongoose from "mongoose";

export const userSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    userPhone:{type:String,required:true},
    userEmail:{type:String,required:true},
    userProfile:{type:String,required:true},

});
export interface UserModelData{
   userName:string,   userPhone:string,   userEmail:string,  userProfile:string
}