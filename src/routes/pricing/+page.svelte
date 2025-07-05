<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
	testimonials={[
		{
			name: "Mika Luo",
			position: "Product Designer",
			company: "Pocketframer",
			quote:
				"Grids saved me weeks of job hunting. Every role felt relevant, and I ended up landing an interview within days. The ROI on my subscription was incredible.",
			image:
				"/generated/image-a-professional-headshot-of-an-asian-woma.webp"
		},
		{
			name: "Tanae H.",
			position: "UX Lead",
			company: "Hexform Studio",
			quote:
				"The auto-generated profile hit all the right notes. Felt like it was made by a recruiter who knew exactly what companies wanted. Worth every penny.",
			image:
				"/generated/image-a-professional-headshot-of-a-black-woman.webp"
		},
		{
			name: "Cam Díaz",
			position: "Senior UI Designer",
			company: "Everwave",
			quote:
				"Honestly refreshing. Every design role I saw was something I would actually apply for. The time savings alone justified the cost.",
			image:
				"/generated/image-a-professional-headshot-of-a-latino-man-.webp"
		}
	]}
/>

<CallToAction
	title="Land your next design job, minus the chaos"
	subtitle="Your next design role is waiting"
	description="Thousands of jobs sorted. Signals over noise. Profiles built to win. Join a community of designers making smarter career moves—fast."
	imageSrc="/generated/image-a-cheerful-designer-sitting-at-a-desk-su.webp"
	callsToAction={[
		{
			href: "https://grids.at/community",
			label: "Join Discord community",
			variant: "primary"
		},
		{
			href: "/about",
			label: "Learn more",
			variant: "secondary"
		}
	]}
/>
