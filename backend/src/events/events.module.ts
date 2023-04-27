import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { EventMember, EventMemberSchema } from "../schemas/eventMember.schema";
import { Event, EventSchema } from "../schemas/event.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      { name: EventMember.name, schema: EventMemberSchema},
    ]),
  ],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
