import { store } from '../store';

export const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate(callback: any) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback: any) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

export function getProtectedThing() {
  // grab current state
  const state = store.getState();

  store.subscribe

  // get the JWT token out of it
  // (obviously depends on how your store is structured)
  const authToken = state.globalState.currentOrganization;

  console.log(authToken);
  // Pass the token to the server
  // return fetch('/user/thing', {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${authToken}`
  //   }
  // }).then(res => res.json());
}
