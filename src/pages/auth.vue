<template>
  <main class="login_main">
    <h1>{{ isLogin ? 'Login Page' : 'Inscription Page' }}</h1>
    <form v-on:submit.prevent.stop.once="submitHandler">
      <section>
        <article>
          <label for="email"></label>
          <input
            v-model="email"
            id="email"
            placeholder="Enter your email"
            type="email"
            class="input"
          />
        </article>
        <article>
          <label for="password"></label>
          <input
            v-model="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            type="password"
            class="input"
          />
        </article>
        <article v-if="!isLogin">
          <label for="confirmPassword"></label>
          <input
            v-model="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            type="password"
            class="input"
          />
        </article>
      </section>
      <section>
        <button type="submit" class="button is-primary">{{ isLogin ? 'Se connecter' : 'S\'inscrire' }}</button>
        <button type="reset" class="button is-danger" @click="resetForm">
          Réinitialiser
        </button>
      </section>
    </form>
    <section>
      <p>
        {{ isLogin ? 'Pas de compte ?' : 'Vous avez déjà un compte ?' }}
        <button @click="toggleForm" class="button is-link">
          {{ isLogin ? 'S\'inscrire' : 'Se connecter' }}
        </button>
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import inputValidator from "../utils/input-validator";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isLogin = ref(true);

watch(email, (val) => {
  console.log(val, inputValidator(val, "email"));
});

watch(password, (val) => {
  console.log(val, inputValidator(val, "password"));
});

const submitHandler = async () => {
  if (!isLogin.value && password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas !");
    return;
  }

  const result = await fetch("users.json");
  const users = await result.json();
  console.log(users);

  if (isLogin.value) {
    const user = users.find((user: any) => user.email === email.value);
    if (!user) {
      alert("Utilisateur non trouvé");
      return;
    }
    if (user.password !== password.value) {
      alert("Mauvais mot de passe");
      return;
    }
    console.log("Utilisateur connecté");
    router.push("/session/" + user.id);
  } else {
    const newUser = {
      id: Date.now(), 
      email: email.value,
      password: password.value,
    };
    users.push(newUser); 
    alert("Inscription réussie !");
    console.log("Nouvel utilisateur inscrit:", newUser);
    router.push("/session/" + newUser.id);
  }
};

const resetForm = () => {
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
};

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped>
  .login_main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    max-width: 280px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #333;
  }

  .button {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 10px;
    color: white;
  }

  .is-primary {
    background-color: #333;
    border: none;
  }

  .is-primary:hover {
    background-color: #555;
  }

  .is-danger {
    background-color: #888;
    border: none;
  }

  .is-link {
    background-color: transparent;
    color: #333;
    border: 1px solid #333;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }

  button {
    background-color: transparent;
    border: none;
    color: #333;
    cursor: pointer;
  }
</style>
