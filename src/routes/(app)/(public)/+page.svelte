<script lang="ts">
	import Dish from '$lib/components/Dish.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ dishes } = data);
</script>

<main class="p-4 justify-center flex">
	<div class="grid grid-cols-4 gap-4">
		{#each dishes as dish}
			<Dish {dish} />
		{/each}
	</div>
</main>
