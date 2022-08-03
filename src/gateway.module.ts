import { Module } from '@nestjs/common';
import {TournamentController} from "./tournament/tournament.controller";
@Module({
  imports: [],
  controllers: [TournamentController],
  providers: [],
})
export class GatewayModule {}
