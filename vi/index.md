---
layout: page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  router.go('/vi/guide/getting-started')
})
</script>

<meta http-equiv="refresh" content="0;url=/vi/guide/getting-started">
