import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './UserCreate/user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserLoginModule } from './user-login/user-login.module';

@Module({
  imports: [UserLoginModule,AuthModule,UserModule,MongooseModule.forRoot('mongodb+srv://UserOne:appuser12345@cluster0.fqwsu.mongodb.net/Database1?retryWrites=true&w=majority'), AuthModule, UserLoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
