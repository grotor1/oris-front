import { userState } from '@/states/user.js'

export const doRequest = async (url, method, body) => {
  try {
    const res = await fetch(url, {
      method,
      body,
      headers: {
        'Authentication': 'Bearer ' + userState.getToken.value,
      }
    })

    return await res.json();
  } catch (e) {
    if (e.status === 403) {
      userState.removeToken();
    } else {
      console.log(e);
    }
  }
}
