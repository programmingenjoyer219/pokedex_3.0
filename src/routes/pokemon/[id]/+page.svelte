<script>
	import PokemonTypeSlot from "$components/PokemonTypeSlot.svelte";
	import PokemonStat from "$components/PokemonStat.svelte";
	export let data;
	$: ({
		id,
		name: { english },
		type,
		base,
		species,
		description,
		profile: { height, weight, ability, gender },
	} = data.pokemon);

	$: abilityMod = ability.map((a) => a[0]);
</script>

<svelte:head>
	<title>{english}</title>
</svelte:head>

<section class="section text-zinc-700 dark:text-gray-300">
	<h1 class="text-5xl mb-4 font-extrabold text-center text-blue-500">
		{english}
	</h1>
	<div class="grid grid-cols-1 lg:grid-cols-2 text-lg">
		<!-- col-1 -->
		<div class="flex flex-col gap-4 p-4 items-stretch">
			<!-- row-1 -->
			<div class="flex flex-col sm:flex-row items-center gap-2">
				<img
					src="/assets/images/{id}.png"
					alt={english}
					class="sm:w-1/2 max-w-80"
				/>
				<div class="flex flex-col gap-2 w-full sm:w-1/2">
					<p>Species: <span class="info">{species}</span></p>
					<p>Height: <span class="info">{height}</span></p>
					<p>Weight: <span class="info">{weight}</span></p>
					<p>Gender Ratio: <span class="info">{gender}</span></p>
					<p>Abilities: <span class="info">{abilityMod.join(", ")}</span></p>
					<p>Type:</p>
					<PokemonTypeSlot {type} />
				</div>
			</div>
			<!-- row-2 -->
			<p>{description}</p>
		</div>
		{#if base}
			<!-- col-2 -->
			<div class="p-4 space-y-4">
				<h2 class="text-3xl font-semibold">{english}'s Stats:</h2>
				<div class="flex flex-col items-stretch gap-2">
					{#each Object.entries(base) as [statName, value], index (statName)}
						<PokemonStat {value} {index} />
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	span.info {
		@apply font-semibold text-blue-500;
	}
</style>
