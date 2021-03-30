<template>
	<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
		<a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
			Company name
		</a>
		<ul class="navbar-nav me-right mb-2 mb-lg-0">
			<li class="nav-item">
				<router-link to="/profile" class="nav-item text-white">
					{{ user?.first_name }} {{ user?.last_name }}
				</router-link>
			</li>
			<li class="nav-item">
				<a
					href="javascript:void(0)"
					@click="logout"
					class="nav-item text-white"
				>
					Sign Out
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
	name: "Nav",
	props: ['user'],
	setup() {
		const router = useRouter();

		const logout = () => {
			localStorage.clear();
			router.push('login');
		}

		return {
			logout
		}
	}
}
</script>