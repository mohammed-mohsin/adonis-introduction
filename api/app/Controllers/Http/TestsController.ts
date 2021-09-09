import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {


    async test(ctx: HttpContextContract) {
        return ctx.request.all()
    }

    async testDynamicRoute(ctx: HttpContextContract) {
        return ctx.params;
    }
}
