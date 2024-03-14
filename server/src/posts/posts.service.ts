import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  create() {
    return 'This action adds a new post';
  }

  async findAll() {
    const channels = await this.prisma.channel.findMany({
      where: {
        following: true,
      },
      include: {
        posts: true,
      },
    });
    return channels;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
