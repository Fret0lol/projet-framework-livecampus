<template>
	<div id="register">
		<div class="logo">
			<img src="../assets/logo.png" alt="Vue logo" />
			<h2 class="title">Cloud Storage</h2>
		</div>
		<div class="form">
			<div class="form-input">
				<label>Nom</label>
				<input type="email" v-model="name" />
			</div>
			<div class="form-input">
				<label>Email</label>
				<input type="email" v-model="email" />
			</div>
			<div class="form-input">
				<label>Password</label>
				<input type="password" v-model="password" />
			</div>
		</div>
		<div class="buttons">
			<p>Already an account ? <a @click="$emit('goto')">Click here</a></p>
			<button @click="register" class="button">Register</button>
		</div>
	</div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

let name = ref("");
let email = ref("");
let password = ref("");

const router = useRouter();
const store = useStore();

function register() {
	const fetchOption = {
		method: "POST",
		body: JSON.stringify({
			name: name.value,
			email: email.value,
			password: password.value,
		}),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	};
	console.log(email.value, password.value);
	fetch(`http://localhost:3001/users`, fetchOption)
		.then((apiResponse) => {
			return apiResponse.json();
		})
		.then((jsonResponse) => {
			console.log(jsonResponse);
			if (jsonResponse) {
				store.dispatch("setUserAction", {
					email: email.value,
					password: password.value,
				});
				router.push("/home");
			} else {
				alert("Register failed");
			}
		});
}
</script>
<style>
#register {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 50px;
}
#register .logo {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;
	font-size: 1em;
}
#register .logo img {
	width: 75px;
}
#register .form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
}
.form-input {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
}
.form-input label,
.buttons p {
	font-size: 0.8em;
	font-weight: 500;
	color: #f0f0f0;
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
.buttons {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
}
button {
	padding: 10px 20px;
}
</style>
