import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [ 
      {
        _id:"1",
        blogContent:" Hello India",
        blogAuthor:"Ram",
        clapCount:6
      },
      {
        _id:"2",
        blogContent:" Learining saga",
        blogAuthor:"Gopal",
        clapCount:6
      },
      {
        _id:"31",
        blogContent:" Listening",
        blogAuthor:"Sandp",
        clapCount:10
      }
  ];
  }
}
