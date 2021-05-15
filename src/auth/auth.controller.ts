import { Body, Controller,Get,Param,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('Authuser')
export class AuthController {
    constructor(private readonly userService:AuthService){
    }
@Post('Create')
adduser(@Body() completeBody:{user_name:String,user_email:String,user_passowrd:String} ):any{
  return  this.userService.createUser(completeBody)
};
@Post('login')
authuser(@Body() completeBody:{user_name:String,user_email:String,user_passowrd:String} ):any{
  return  this.userService.validateUser(completeBody)
};
}
