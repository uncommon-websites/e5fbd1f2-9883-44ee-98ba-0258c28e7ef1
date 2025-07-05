<script lang="ts">
	interface Props {
		class?: string;
	}
	
	let { class: className = "size-5" }: Props = $props();
</script>

<span class={className}>❤️</span>