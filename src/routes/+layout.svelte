<script>
	import '../app.css'
</script>

<nav class="border-b">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-14 items-center justify-between">
			<a
				href="/"
				class="font-medium text-gray-900 hover:text-gray-700 font-serif italic text-lg"
				>Aquarium Planner</a
			>
			<div class="hidden md:block">
				<div class="flex items-baseline space-x-8">
					<a href="/" class=" text-gray-900 hover:text-gray-700">Home</a>
				</div>
			</div>
		</div>
	</div>
</nav>
<div class="min-h-screen bg-gray-50">
	<slot />
</div>
