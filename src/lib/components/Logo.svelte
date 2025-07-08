<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	const props: HTMLAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="" {...props}>
	<!-- Grid pattern representing job matching -->
	<rect x="3" y="3" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
	<rect x="10" y="3" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
	<rect x="17" y="3" width="4" height="4" rx="1" fill="currentColor" opacity="0.4"/>
	
	<rect x="3" y="10" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
	<rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor"/>
	<rect x="17" y="10" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
	
	<rect x="3" y="17" width="4" height="4" rx="1" fill="currentColor" opacity="0.4"/>
	<rect x="10" y="17" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
	<rect x="17" y="17" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
	
	<!-- Connection lines showing matching -->
	<path d="M7 5 L10 5" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
	<path d="M14 5 L17 5" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
	<path d="M7 12 L10 12" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
	<path d="M14 12 L17 12" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
	<path d="M7 19 L10 19" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
	<path d="M14 19 L17 19" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
</svg>
