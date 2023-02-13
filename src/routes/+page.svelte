<script>
  import debounce from 'lodash.debounce';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  /** @type {import('./$types').PageData} */
  export let data;

  const updateSearch = debounce((search) => {
    goto(`?search=${search}`, { replaceState: true, keepFocus: true });
  }, 500);
  const handleInput = (event) => {
    updateSearch(event.target.value);
  };
</script>

<form method="GET" on:submit|preventDefault>
  <input
    type="text"
    name="search"
    value={$page.url.searchParams.get('search') || ''}
    on:input={handleInput}
  >
  <button type="submit">Search</button>
</form>

{#each data.students as student (student.id)}
  <a href="/student/{student.id}">{student.name}</a>
{/each}

<style>
  a {
    display: block;
  }
</style>