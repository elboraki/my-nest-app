import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { get } from 'http';

@Controller('posts')
export class PostsController {

    @Get()
    getAllPosts(@Query() query) {
        Logger.debug(query, "Qur")
        return { post: "all posts" }
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return "find post"
    }

    @Post()
    create(@Body() createPostDto) {
        return "Create post"
    }


    @Put(':id')
    updatePost(@Param('id') id, @Body() updatePostDto) {
        return "update post"
    }

    @Delete(':id')
    deletePost(@Param('id') id) {
        return "delete post"
    }
}
