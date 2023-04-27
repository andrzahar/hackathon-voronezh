import { Module } from '@nestjs/common';
import { PassportService } from './passport.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Passport, PassportSchema } from "../schemas/passport.schema";

@Module({
  imports:[
    MongooseModule.forFeature([{name: Passport.name, schema: PassportSchema}]),
  ],
  providers: [PassportService],
  exports: [PassportService],
})
export class PassportModule {}
