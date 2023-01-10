import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app/app.gateway';
import { Chat } from './chat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '1234',
      database: 'chat',
      entities: [Chat],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Chat])
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
