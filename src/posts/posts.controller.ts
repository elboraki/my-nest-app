import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { get } from 'http';
import { PostDto } from 'src/post';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {

    }
    @Get()
    getAllPosts(@Query() query) {
        Logger.debug(query, "Qur")

        return this.postsService.getAllPost();
    }

    @Get(':id')
    findOne(@Param('id') id) {

        return this.postsService.findOnePost(2)
    }

    @Post()
    create(@Body() createPostDto): any {

        return this.postsService.createPost(createPostDto)
    }


    @Put(':id')
    updatePost(@Param('id') id, @Body() updatePostDto) {
        const post = this.postsService.updatePost(id, updatePostDto)
        return post

    }

    @Delete(':id')
    deletePost(@Param('id') id) {
        const post = this.postsService.removePost(id);
        return post;
    }
}
