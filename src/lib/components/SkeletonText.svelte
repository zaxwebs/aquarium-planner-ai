<script>
	import { cn } from '$lib/utils.ts'

	let className = ''
	export { className as class }
</script>

<div class={cn('h-5 flex items-center w-full', className)}>
	<div class="flex-1 h-4 animate-pulse bg-slate-200 rounded"></div>
</div>
