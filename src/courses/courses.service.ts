import { Injectable } from '@nestjs/common';
import courses from 'src/storage/courses';

@Injectable()
export class AppService {
  getHello(): any {
    return courses;
  }
}
