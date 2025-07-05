<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
</script>

<Hero
	title="Find good jobs, faster"
	subtitle="Cut the noise. Only roles worth your time."
	imageSrc="/generated/image-a-polaroid-photo-of-a-trendy-product-des.webp"
	centered={false}
/>
<LogoScroller 
	label="Trusted by leading design companies"
	logoUrls={[
		'https://logo.clearbit.com/figma.com',
		'https://logo.clearbit.com/adobe.com',
		'https://logo.clearbit.com/spotify.com',
		'https://logo.clearbit.com/airbnb.com'
	]}
/>

<Summary
	title="What we do"
	text="Grids streamlines your job search by filtering thousands of listings to show only opportunities worth considering. We provide clear insights into companies and roles without the fluff, plus help you create profiles that get you hired."
/>

<Testimonials
	testimonials={[
		{
			name: "Celeste Ramirez",
			position: "Senior Product Designer",
			company: "Moonshot Labs",
			quote:
				"Grids saved me 10 hours per week by filtering out irrelevant roles.\nInstead of scrolling through hundreds of listings, I only saw positions that actually matched my skills and salary expectations.",
			image:
				"/generated/image-a-professional-woman-designer-deeply-foc.webp"
		},
		{
			name: "Kieran Walsh",
			position: "UX Lead",
			company: "Velocity Design",
			quote:
				"I avoided three terrible job situations because Grids showed me the real company culture and team dynamics upfront.\nNo more surprise toxic environments or misleading job descriptions after I started.",
			image:
				"/generated/image-a-professional-man-designer-immersed-in-.webp"
		},
		{
			name: "Zara Okafor",
			position: "Creative Director",
			company: "Brand Studio Co",
			quote:
				"Grids helped me negotiate a $15,000 higher salary by showing me exactly what similar roles were paying.\nI walked into interviews knowing my worth and got offers 30% above my previous salary.",
			image:
				"/generated/image-a-professional-woman-designer-participat.webp"
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your job search needs"
	useCases={[
		{
			title: "Smart job matching",
			description: "Cut through thousands of irrelevant listings to find opportunities perfectly matched to your skills, experience, and career goals. No more wasting hours on jobs that don't fit.",
			image: "/generated/image-a-person-sitting-at-a-desk-in-a-well-lit.webp",
			link: {
				href: "/use-cases/smart-job-matching",
				label: "Learn more"
			}
		},
		{
			title: "Company insights",
			description: "Get clear insights into company culture, team dynamics, and role expectations before you apply. Avoid toxic environments and know what you're walking into.",
			image: "/generated/image-a-professional-in-a-modern-office-space-.webp",
			link: {
				href: "/use-cases/company-insights",
				label: "Learn more"
			}
		},
		{
			title: "Profile optimization",
			description: "Create profiles that stand out and check every box employers are looking for. Our tools help you present your skills in the most compelling way possible.",
			image: "/generated/image-a-creative-designer-in-a-bright-studio-s.webp",
			link: {
				href: "/use-cases/profile-optimization",
				label: "Learn more"
			}
		}
	]}
/>

<Features
	title="Design jobs, without the noise"
	subtitle="Grids sifted through thousands of listings so you didn't have to"
	features={[
		{
			title: "Curated job matching",
			description:
				"We filtered thousands of jobs to show only the roles worth considering. Highly relevant opportunities that matched your skills and career goals."
		},
		{
			title: "Vacancies without the fluff",
			description:
				"No more wordy job descriptions or vague responsibilities. Just clear insights about the role, team, and company to help you decide fast."
		},
		{
			title: "Optimized profiles that got you hired",
			description:
				"From portfolio snapshots to employer signals, our profile tools helped you stand out and check every box your next employer was looking for."
		}
	]}
/>
<AboutTeaser />
<CallToAction />
