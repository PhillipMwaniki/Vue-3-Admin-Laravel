<template>
	<div class="text-center">
		<main class="form-signin">
			<form @submit.prevent="submit">
				<h1 class="h3 mb-3 fw-normal">Register</h1>
				<label for="first_name" class="visually-hidden">First Name</label>
				<input
					type="text"
					id="first_name"
					class="form-control"
					placeholder="First Name"
					required
					v-model="firstName"
				/>
				<label for="last_name" class="visually-hidden">Last Name</label>
				<input
					type="text"
					id="last_name"
					class="form-control"
					placeholder="Last Name"
					required
					v-model="lastName"
				/>
				<label for="email" class="visually-hidden">Email Address</label>
				<input
					type="email"
					id="email"
					class="form-control"
					placeholder="Email Address"
					required
					v-model="email"
				/>
				<label for="password" class="visually-hidden">Password</label>
				<input
					type="password"
					id="password"
					class="form-control"
					placeholder="Password"
					required
					v-model="password"
				/>
				<label for="password_confirm" class="visually-hidden"
					>Confirm Password</label
				>
				<input
					type="password"
					id="password_confirm"
					class="form-control"
					placeholder="Confirm Password"
					required
					v-model="passwordConfirm"
				/>
				<button class="w-100 btn btn-lg btn-primary" type="submit">
					Register
				</button>
			</form>
		</main>
	</div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
	name: 'Register',
	setup() {
		const firstName = ref('');
		const lastName = ref('');
		const email = ref('');
		const password = ref('');
		const passwordConfirm = ref('');
		const router = useRouter();

		const submit = async () => {
			const response = await axios.post('http://localhost:8000/api/register', {
				first_name: firstName.value,
				last_name: lastName.value,
				email: email.value,
				password: password.value,
				password_confirm: passwordConfirm.value,
			});
			await router.push('/login');
		};

		return {
			firstName,
			lastName,
			email,
			password,
			passwordConfirm,
			submit
		};
	}
}
</script>

<style scoped>
html,
body {
	height: 100%;
}

body {
	display: flex;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 40px;
	background-color: #f5f5f5;
}

.form-signin {
	width: 100%;
	max-width: 500px;
	padding: 15px;
	margin: auto;
}
.form-signin .checkbox {
	font-weight: 400;
}
.form-signin .form-control {
	position: relative;
	box-sizing: border-box;
	height: auto;
	padding: 10px;
	font-size: 16px;
}
.form-signin .form-control:focus {
	z-index: 2;
}
.form-signin input[type="email"] {
	margin-bottom: -1px;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}
#password_confirm {
	margin-bottom: 10px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
</style>