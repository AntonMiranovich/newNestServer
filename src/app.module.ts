import { Module } from '@nestjs/common';
import { StudModule } from './students/students.module';

@Module({
  imports: [StudModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
