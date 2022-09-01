import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../module/user/User'

const USER = 'USER'

/**
 * Persistent storage. Wrapper of Async Storage.
 * https://react-native-async-storage.github.io/async-storage
 */
export class LocalStorage {
  static setUser(user) {
    const userString = JSON.stringify(user)
    return AsyncStorage.setItem(USER, userString)
  }

  static getUser() {
    return AsyncStorage.getItem(USER).then((userString) => {
      if (!userString) {
        return null
      }
      const userParsed = JSON.parse(userString)
      return new User(
        userParsed.id,
        userParsed.email,
        userParsed.authToken,
        userParsed.refreshToken,
        userParsed.permission
      )
    })
  }

  static clearUser() {
    return AsyncStorage.removeItem(USER)
  }
}
