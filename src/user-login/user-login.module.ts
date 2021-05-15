import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserloginController } from './user-login.controller';
import { userloginCredentialSchema } from './user-login.model';
import { UserLoginService } from './user-login.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'userloginCredential',schema:userloginCredentialSchema}])],
  controllers: [UserloginController],
  providers: [UserLoginService]
})
export class UserLoginModule {}
