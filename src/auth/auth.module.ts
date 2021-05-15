import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { authuserloginCredentialSchema } from './auth.model';
import { AuthService } from './auth.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'AuthuserloginCredential',schema:authuserloginCredentialSchema}])],
  controllers: [AuthController],

  providers: [AuthService]
})
export class AuthModule {}
