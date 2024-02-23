import { CacheInterceptor } from "@nestjs/cache-manager";
import { ExecutionContext, Injectable } from "@nestjs/common";

// @Injectable()
// export class HttpCahceIntercaptor extends CacheInterceptor {
//     trackBy(context: ExecutionContext): string | undefined {
//         const request = context.switchToHttp().getRequest()
//         const { httpAdapter } = this.httpAdapterHost

//         const isGetRequest = httpAdapter.getRequestMethod(request) === 'GET'
//         const excludePaths = [

//         ]
//         if (!isGetRequest || (isGetRequest && excludePaths.includes(httpAdapter.getRequestUrl(request)))) {
//             return undefined
//         }
//         return httpAdapter.getRequestUrl(request)
//     }
// }