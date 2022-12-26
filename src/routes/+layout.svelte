<script>
    import { supabaseClient } from '$lib/supabase'
    import { invalidate } from '$app/navigation'
    import { page } from "$app/stores";
    import { onMount } from 'svelte'
    import Header from "../components/Header.svelte";
  
    onMount(() => {
      const {
        data: { subscription },
      } = supabaseClient.auth.onAuthStateChange(() => {
        invalidate('supabase:auth')
      })
  
      return () => {
        subscription.unsubscribe()
      }
    })
</script>

<Header />
<main>
<slot />
</main>

<style lang="scss">
  main {
    background-color: #0A0A0A;
    color: white;
    font-family: "Lato"
  }
</style>