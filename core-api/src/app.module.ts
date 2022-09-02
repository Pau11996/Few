import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database:process.env.MYSQL_NAME,
      entities: [__dirname + '/**/*/.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
