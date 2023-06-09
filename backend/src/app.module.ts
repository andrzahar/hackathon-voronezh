import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { MongooseConfigService } from './config/MongooseConfigService';
import { EventsModule } from './events/events.module';
import { PassportModule } from './passport/passport.module';
import { SportsmanModule } from './sportsman/sportsman.module';
import { RegistrationModule } from "./registration/registration.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RegistrationModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1 d' },
    }),
    EventsModule,
    PassportModule,
    SportsmanModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
