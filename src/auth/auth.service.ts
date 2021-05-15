import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthuserloginCredential } from './auth.model';

@Injectable()
export class AuthService {

  constructor(@InjectModel("AuthuserloginCredential") private readonly UserLoginService:Model<any,AuthuserloginCredential>,){

  }
async validateUser(username): Promise<any> {
    const user = await this.UserLoginService.findOne({"user_name":username.user_name});
    if (user && user.user_passowrd === username.user_passowrd) {
      const { password, ...result } = user;
      console.log(user)
      return result;

    }
    return null;
  }

  async createUser(user:object) {
    console.log(user)
    const Userdetails= new this.UserLoginService(user)
    let reuslt= await  Userdetails.save()
    console.log(reuslt)
    return reuslt;    
   }
}
