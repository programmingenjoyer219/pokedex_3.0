<script>
	import Pagination from "$components/Pagination.svelte";
	import Searchbar from "$components/Searchbar.svelte";
	import CardGrid from "$components/CardGrid.svelte";
	import Marquee from "$components/Marquee.svelte";
	import { pokemonsPerPage, resetPaginationState } from "$lib/store.js";

	export let data;
	$: ({ pokemons } = data);
	$: pokemonsToDisplay = pokemons;
	$: totalPages = Math.ceil(pokemonsToDisplay.length / $pokemonsPerPage);

	function searchPokemonByName(e) {
		const form = e.target;
		const formData = new FormData(form);
		const searchQuery = formData.get("searchQuery");
		pokemonsToDisplay = pokemons.filter((p) =>
			p.name.english.toLowerCase().includes(searchQuery.toLowerCase())
		);
		resetPaginationState();
		form.querySelector("input").value = "";
	}

	function getPokemonsByType(type) {
		pokemonsToDisplay = pokemons.filter((p) => p.type.includes(type));
		resetPaginationState();
	}
</script>

<svelte:head>
	<title>Pokedex 3.0</title>
</svelte:head>

<Searchbar {searchPokemonByName} />

<Marquee {getPokemonsByType} />

{#if pokemonsToDisplay.length}
	<CardGrid {pokemonsToDisplay} />
	<Pagination {totalPages} />
{:else}
	<section class="section">
		<img class="mx-auto" src="/assets/sprites/0.png" alt="No results" />
		<h3 class="text-2xl font-semibold text-blue-600 text-center">
			No results...
		</h3>
	</section>
{/if}
