
export class User {

  constructor(
    id,
    email,
    authToken,
    refreshToken,
    permission
  ) {
    this.id = id
    this.email = email
    this.authToken = authToken
    this.refreshToken = refreshToken,
    this.permission=permission
  }

  static fromJson(loginResponse, email) {
    return new User(
      loginResponse.userId,
      email,
      loginResponse.authToken,
      loginResponse.refreshToken,
      loginResponse.permission
    )
  }
}
