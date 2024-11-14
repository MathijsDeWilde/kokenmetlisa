<script lang="ts">
	import type { Tables } from '$lib/schema';

	export let dish: Tables<'dishes'>;

	let className: string = '';
	export { className as class };
</script>

<div
	class="{className} flex gap-2 justify-center flex-col items-center border border-gray-500 rounded p-2"
>
	<img
		class="max-w-32"
		src="https://assets.bonappetit.com/photos/6358198658164d3e28667f80/16:9/w_2560%2Cc_limit/1025-simple-is-best-dressing-lede.jpg"
		alt="dish"
	/>
	{dish.name}
</div>
