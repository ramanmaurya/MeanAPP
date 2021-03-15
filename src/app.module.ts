import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './UserCreate/user/user.module';

@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb+srv://UserOne:appuser12345@cluster0.fqwsu.mongodb.net/Database1?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
