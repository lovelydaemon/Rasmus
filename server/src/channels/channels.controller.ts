import { Controller, Get, Param, Delete, Patch } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  findAll() {
    return this.channelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channelsService.findOne(+id);
  }

  @Patch(':id/follow')
  toggleFollow(@Param('id') id: string) {
    return this.channelsService.toggleFollow(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelsService.remove(+id);
  }
}
