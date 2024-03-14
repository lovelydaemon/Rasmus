import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChannelsService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return `This action returns all channels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channel`;
  }

  async toggleFollow(id: string) {
    let channel = await this.prisma.channel.findFirst({
      where: { id },
    });
    if (!channel) return; //TODO add not found

    channel = await this.prisma.channel.update({
      where: { id },
      data: { following: !channel.following },
    });

    return channel;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
