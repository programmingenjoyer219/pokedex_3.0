<script>
	export let weight;
	export let height;
</script>

<div class="flex items-center justify-center gap-4 mt-2 dark:text-gray-300">
	<div class="flex items-center justify-center gap-1">
		<i class="ri-ruler-fill"></i>
		<span class="font-semibold text-lg">{height}</span>
	</div>

	<div class="flex items-center justify-center gap-1">
		<i class="ri-scales-2-fill"></i>
		<span class="font-semibold text-lg">{weight}</span>
	</div>
</div>
