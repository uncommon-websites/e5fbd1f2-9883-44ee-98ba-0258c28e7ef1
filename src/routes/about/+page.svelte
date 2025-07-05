<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Quality over quantity",
			description: "We believed in curating only the most relevant opportunities, cutting through the noise of endless job listings to surface roles that truly mattered."
		},
		{
			title: "Transparency first",
			description: "No buzzwords or fluff. We provided clear, honest insights into companies and roles so job seekers could make informed decisions about their careers."
		},
		{
			title: "Empowering talent",
			description: "Every feature we built was designed to help job seekers present their best selves and match with opportunities where they could truly thrive."
		}
	];
</script>

<SecondaryHero
	title="Connecting design talent"
	subtitle="with opportunities that matter"
	imageSrc="/mockups/airport-screen-1751673944500.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Job hunting broke our hearts. Designers were drowning in endless listings, wading through buzzwords and irrelevant opportunities just to find roles worth considering. We knew there had to be a better way to connect talented creatives with meaningful work.",
		"Grids became the signal in the noise. We sifted through thousands of jobs to surface only the ones that mattered, providing clear insights into companies and roles without the fluff. Our platform helped job seekers create profiles that truly showcased their potential, ensuring they always put their best work forward.",
		"Though we made the difficult decision to sunset Grids in October 2024, we're proud of the community we built and the connections we facilitated. The design world deserved better hiring experiences, and we're grateful to everyone who believed in that vision alongside us."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and investor sections removed as Grids has no mentioned team members or investors -->

<!-- CTA Section -->
<CallToAction />
