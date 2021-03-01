<template>
	<!-- nav -->
	<Nav />
	<div class="container-fluid">
		<div class="row">
			<!-- menu -->
			<Menu />
			<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
				<div
					class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
				>
					<h1 class="h2">Dashboard</h1>
					<div class="btn-toolbar mb-2 mb-md-0">
						<div class="btn-group me-2">
							<button type="button" class="btn btn-sm btn-outline-secondary">
								Share
							</button>
							<button type="button" class="btn btn-sm btn-outline-secondary">
								Export
							</button>
						</div>
						<button
							type="button"
							class="btn btn-sm btn-outline-secondary dropdown-toggle"
						>
							<span data-feather="calendar"></span>
							This week
						</button>
					</div>
				</div>

				<h2>Section title</h2>
				<div class="table-responsive">
					<table class="table table-striped table-sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Header</th>
								<th>Header</th>
								<th>Header</th>
								<th>Header</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1,001</td>
								<td>random</td>
								<td>data</td>
								<td>placeholder</td>
								<td>text</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
export default {
	components: {
		Menu,
		Nav,
	}
}
</script>

<style>
body {
	font-size: 0.875rem;
}

.feather {
	width: 16px;
	height: 16px;
	vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
	position: fixed;
	top: 0;
	/* rtl:raw:
  right: 0;
  */
	bottom: 0;
	/* rtl:remove */
	left: 0;
	z-index: 100; /* Behind the navbar */
	padding: 48px 0 0; /* Height of navbar */
	box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
	.sidebar {
		top: 5rem;
	}
}

.sidebar-sticky {
	position: relative;
	top: 0;
	height: calc(100vh - 48px);
	padding-top: 0.5rem;
	overflow-x: hidden;
	overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
	font-weight: 500;
	color: #333;
}

.sidebar .nav-link .feather {
	margin-right: 4px;
	color: #727272;
}

.sidebar .nav-link.active {
	color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
	color: inherit;
}

.sidebar-heading {
	font-size: 0.75rem;
	text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	font-size: 1rem;
	background-color: rgba(0, 0, 0, 0.25);
	box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
	top: 0.25rem;
	right: 1rem;
}

.navbar .form-control {
	padding: 0.75rem 1rem;
	border-width: 0;
	border-radius: 0;
}

.form-control-dark {
	color: #fff;
	background-color: rgba(255, 255, 255, 0.1);
	border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
	border-color: transparent;
	box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

.bd-placeholder-img {
	font-size: 1.125rem;
	text-anchor: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

@media (min-width: 768px) {
	.bd-placeholder-img-lg {
		font-size: 3.5rem;
	}
}
</style>