import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  create() {
    return 'This action adds a new post';
  }

  async findAll() {
    // не очень вариант, к каждому посту добавится много лишней инфы
    const posts = await this.prisma.post.findMany({
      include: {
        Channel: true,
      },
    });

    return posts;
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
