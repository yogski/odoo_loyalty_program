// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth, response }) {
    const email = request.input('email')
    const password = request.input('password')
    console.log(Object.keys(request));

    await auth
      .use('web') // 👈 using sessions guard
      .attempt(email, password)

    response.redirect().toRoute('dashboard')
  }
}
