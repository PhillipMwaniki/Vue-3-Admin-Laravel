<template>
	<form @submit.prevent="submit">
		<div class="form-group">
			<label for="first_name">First Name</label>
			<input
				type="text"
				name="first_name"
				class="form-control"
				v-model="firstName"
			/>
		</div>
		<div class="form-group">
			<label for="last_name">Last Name</label>
			<input
				type="text"
				name="lastt_name"
				class="form-control"
				v-model="lastName"
			/>
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input type="text" name="email" class="form-control" v-model="email" />
		</div>
		<div class="form-group">
			<label for="role">role</label>
			<select name="role_id" class="form-control" v-model="roleId">
				<option value="">Select Role</option>
				<option v-for="role in roles" :key="role.id" :value="role.id">
					{{ role.name }}
				</option>
			</select>
		</div>
		<button class="btn btn-outline-secondary">Save</button>
	</form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { User } from "@/classes/user";
export default defineComponent({
	name: "UsersCreate",
	setup() {
		const firstName = ref("");
		const lastName = ref("");
		const email = ref("");
		const roleId = ref(0);
		const roles = ref([]);
		const router = useRouter();
		const { params } = useRoute();

		onMounted(async () => {
			const response = await axios.get("roles");
			roles.value = response.data.data;

			const userCall = await axios.get(`users/${params.id}`);
			const user: User = userCall.data.data;

			firstName.value = user.first_name;
			lastName.value = user.last_name;
			email.value = user.email;
			roleId.value = user.role.id;
		});

		const submit = async () => {
			await axios.put(`users/${params.id}`, {
				first_name: firstName.value,
				last_name: lastName.value,
				email: email.value,
				role_id: roleId.value,
			});

			await router.push("/users");
		};

		return {
			firstName,
			lastName,
			email,
			roleId,
			roles,
			submit,
		};
	},
});
</script>

<style>
</style>