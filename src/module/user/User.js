
export class User {

  constructor(
    id,
    email,
    authToken,
    username,
    permission
  ) {
    this.id = id
    this.email = email
    this.authToken = authToken
    this.username = username,
      this.permission = permission
  }

  static fromJson(loginResponse, email) {
    return new User(
      loginResponse.userId,
      email,
      loginResponse.authToken,
      loginResponse.username,
      loginResponse.permission
    )
  }
}
