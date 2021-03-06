import { Injectable } from '@nestjs/common';
import * as faker from "faker";
import { PostDto } from 'src/post';


@Injectable()
export class PostsService {
    private readonly posts=[]
    constructor(){
        this.posts=new Array(20)
        .fill(1)
        .map((e,i)=>{
            return {
                id:i+1,
                title:faker.lorem.sentence(),
                body:faker.lorem.paragraph(3),
                createdAt:faker.date.past()
            }
        })
    }

    getAllPost(){
        return this.posts;
    }

    findOnePost(id:number){
        return this.posts.find((e)=>e.id==id)
    }

    getId(){
        return this.posts.length
    }


    createPost(postDto:PostDto):any{
        const post={
            id: this.getId(),
            title:postDto.title,
            body:postDto.body,
            createdAt:new Date().getDate()
        }
        this.posts.push(post);
        return post;
    }

    updatePost(id,updatePostDto){
        const post=this.posts.find(e=>e.id==id);
        post.title=updatePostDto.title;
        post.body=updatePostDto.body

        return updatePostDto;
    }


    removePost(id){
        const postIndex=this.posts.findIndex(e=>e.id==id)

        if(postIndex>-1){
            this.posts.splice(postIndex,1);
        }
    }
 }
