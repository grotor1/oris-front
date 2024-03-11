import { computed, ref } from 'vue'

const useUserState = () => {
  const token = ref();

  const getToken = computed(() => token.value)

  const getIsSignIn = computed(() => !!getToken.value);

  const updateToken = async (credentials) => {
    const res = fetch('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    const newToken = await res.json();

    token.value = newToken;
    localStorage.setItem('token', newToken);
  }

  const signIn = () => {
    const oldToken = localStorage.getItem('token');
    if (oldToken) {
      token.value = oldToken;
    }
  }

  const removeToken = () => {
    localStorage.removeItem('token');
    signIn();
  }

  return {
    signIn,
    removeToken,
    updateToken,

    getToken,
    getIsSignIn,
  }
}

export const userState = useUserState();
