<script>
    import { supabaseClient } from '$lib/supabase'
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
  
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
  
  <slot />