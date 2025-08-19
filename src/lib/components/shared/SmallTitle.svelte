<script lang="ts">
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).replace(" ", " ").replace(/(\d{2} \w{3}) (\d{4})/, "$1, $2");
</script>

<p class="text-xs text-slate-500 my-2">
    <slot>{today}</slot>
</p>