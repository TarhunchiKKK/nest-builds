import { Controller, Get, Injectable, Post, StreamableFile, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";

@Controller('files')
export class FilesController {
    @Get()
    public download(): StreamableFile {
        const file = createReadStream(join(process.cwd(), 'package.json'))
        return new StreamableFile(file)
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    upload(@UploadedFile() file: Express.Multer.File) {
        const fileStream = createWriteStream(join(process.cwd(), `src/files/${file.originalname}`))
        fileStream.write(file.buffer)
        fileStream.close()

        console.log(file.buffer)
        console.log(file)
    }
}