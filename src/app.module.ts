import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UserModule } from './user/user.module';
// Root of our application
@Module({
  imports: [NinjasModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
