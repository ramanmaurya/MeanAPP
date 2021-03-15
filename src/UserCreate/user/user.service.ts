import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModelData } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel("UserModelData") private readonly userModel:Model<any,UserModelData>,){

    }

   // create user//
     async createUser(user:object) {
       const Userdetails= new this.userModel(user)
       let reuslt= await  Userdetails.save()
       console.log(reuslt)
       return reuslt;    
      }

        // fetch all user
        async fetchsingleUser(id) {
            const Userdetails= this.userModel.findOne({_id:id})
            let reuslt= await  Userdetails
             console.log(reuslt)
             return reuslt;
           }
     // fetch all user
      async fetchAllUser() {
        const Userdetails= this.userModel.find()
        let reuslt= await  Userdetails
         console.log(reuslt)
         return reuslt;
       }
    // find and update user
       async fetchUpdate(id,updatedate) {
        console.log(id,updatedate)
        const Userdetails= this.userModel.updateOne({_id:id},updatedate)
        let reuslt= await  Userdetails
         console.log(reuslt)
         return reuslt;
       }

       async deleteingleUser(id) {
        const Userdetails= this.userModel.deleteOne({_id:id})
        let reuslt= await  Userdetails
         console.log(reuslt)
         return reuslt;
       }  

}
