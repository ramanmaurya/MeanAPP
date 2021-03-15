import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {MongooseModule} from '@nestjs/mongoose'
import { userSchema } from './user.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'UserModelData',schema:userSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
