import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userloginCredential } from './user-login.model';

@Injectable()
export class UserLoginService {


    constructor(@InjectModel("userloginCredential") private readonly userloginModel:Model<any,userloginCredential>,){

    }
    async findOne(username: string): Promise<any> {
        return this.userloginModel.find(user => user.user_name === username);
      }
}
