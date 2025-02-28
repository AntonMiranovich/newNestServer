import { Module, RequestMethod } from '@nestjs/common';
import { StudController } from './students.controller';
import { StudService } from './students.service';
import { Validation } from 'src/middlewares';

@Module({
  imports: [],
  controllers: [StudController],
  providers: [StudService],
})
export class StudModule {
  configure(objMiddleware) {
    objMiddleware.apply(Validation).forRoutes({ path: '/students', method: RequestMethod.POST})
    objMiddleware.apply(Validation).forRoutes({ path: '/students', method: RequestMethod.PUT})
  }
}
