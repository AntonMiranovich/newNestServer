import { Module } from '@nestjs/common';
import { AppController } from './courses.controller';
import { AppService } from './courses.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
