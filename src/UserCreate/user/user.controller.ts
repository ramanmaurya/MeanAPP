import { Body, Controller,Get,Param,Post } from '@nestjs/common';
import {UserService} from './user.service'
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){
    }
@Post('create')
adduser(@Body() completeBody:{userName:String,userPhone:Number,userEmail:String,userProfile:String} ):any{
  return  this.userService.createUser(completeBody)
};

@Get('alluser')
alluser() {
  return this.userService.fetchAllUser();
}
@Get('singleuser/:id')
getsingle(@Param('id') prodid :string,) {
  return this.userService.fetchsingleUser(prodid);
}
@Post('update/:id')
updateUser(@Param('id') prodid :string,@Body() completeBody :{userName:String,userPhone:Number,userEmail:String,userProfile:String} ):any{
    return  this.userService.fetchUpdate(prodid,completeBody)
};
@Post('delete/:id')
DeleteUser(@Param('id') prodid :string ):any{
    return  this.userService.deleteingleUser(prodid)
};
}
