import { Module } from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { SportsmanController } from './sportsman.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Sportsman, SportsmanSchema } from "../schemas/sportsman.dto";
import { PassportModule } from "../passport/passport.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Sportsman.name, schema: SportsmanSchema}]),
    PassportModule,
  ],
  providers: [SportsmanService],
  controllers: [SportsmanController]
})
export class SportsmanModule {}
