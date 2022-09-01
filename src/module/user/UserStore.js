import { action, autorun, makeObservable, observable } from 'mobx'
import * as React from 'react'
import { LocalStorage } from '../../misc/LocalStorage'

class UserStore {
  constructor() {
    this.user = undefined
    makeObservable(this, {
      user: observable,
      setUser: action,
      logout: action,
    })
  }

  setUser(user) {
    this.user = user
    LocalStorage.setUser(user)
  }

  logout() {
    this.user = undefined
    LocalStorage.clearUser()
  }
}

export const userStore = new UserStore()

export function useInitUser() {
  React.useEffect(() => {
    LocalStorage.getUser().then((user) => {
      if (user) {
        userStore.setUser(user)
      }
    })
  }, [])
}
