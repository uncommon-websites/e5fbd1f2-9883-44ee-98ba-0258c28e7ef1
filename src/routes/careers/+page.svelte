<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons - using placeholder components
	const IconBriefcase = () => '💼';
	const IconUsers = () => '👥';
	const IconHeart = () => '❤️';
	const IconGlobe = () => '🌍';

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Shape job search revolution",
			description: "Work on algorithms that match thousands of candidates with their perfect roles, directly impacting careers and lives."
		},
		{
			title: "Data-driven innovation",
			description: "Build machine learning models that filter noise and surface only meaningful opportunities for job seekers."
		},
		{
			title: "Community-first culture",
			description: "Join a tight-knit team that values quality connections and meaningful professional relationships."
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Sophie Chen",
			position: "Software Engineer",
			company: "Engineering Team",
			quote:
				"When I started as a junior engineer, I was amazed by how much the senior team invested in my growth. The mentorship here isn't just about code reviews—it's about understanding the bigger picture of how our matching algorithms actually help people find careers they love. I've learned more in my first year than I did in my entire computer science program.",
			image:
				"/generated/image-a-professional-asian-woman-dressed-in-bu.webp"
		},
		{
			name: "Diego Martinez",
			position: "Product Manager",
			company: "Product Team",
			quote:
				"Working on a platform that directly impacts people's career journeys gives every decision real weight. Our team culture is built around honest feedback and rapid iteration—when we see that our filtering algorithms help someone land their dream design role, it makes every late brainstorming session worth it. The autonomy to drive product direction while having a supportive team to bounce ideas off has been incredible for my development.",
			image:
				"/generated/image-a-professional-hispanic-man-wearing-a-sm.webp"
		},
		{
			name: "Amara Williams",
			position: "Marketing Director",
			company: "Marketing Team",
			quote:
				"Leading the marketing team here taught me that authentic growth happens when you're passionate about the mission. Grids wasn't just another job board—we were genuinely trying to cut through the noise for job seekers. The leadership always encouraged bold ideas and gave me the resources to test them. Building a brand around transparency and quality over quantity challenged me to think beyond traditional marketing tactics, and I'm a stronger leader because of it.",
			image:
				"/generated/image-a-professional-african-american-woman-el.webp"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Connect with us",
			description: "Join our Discord community and share your background with the team. We believe in getting to know you beyond just a resume."
		},
		{
			step: 2,
			title: "Collaborative conversation",
			description: "Meet with our team for an honest discussion about your goals, our mission, and how we can grow together."
		},
		{
			step: 3,
			title: "Make an impact",
			description: "Start building meaningful connections between talent and opportunity, helping reshape how people find their ideal roles."
		}
	];

	const values = [
		{
			title: "Quality over quantity",
			description: "We filter through thousands of opportunities to surface only the ones worth your time and consideration."
		},
		{
			title: "Transparency first",
			description: "No buzzwords, no fluff. We provide clear, honest insights into companies and roles that help you make informed decisions."
		},
		{
			title: "Empowering talent",
			description: "We believe every professional deserves to find work that matches their skills and ambitions, not just any available position."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Join our mission to transform careers"
	subtitle="At Grids, we believe in connecting exceptional talent with opportunities that truly matter. Our team is dedicated to creating meaningful career journeys for designers and beyond."
	imageSrc="/generated/image-a-diverse-team-of-professionals-collabor.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join Grids?" subtitle="Build technology that transforms how people find meaningful work" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">How to join our mission</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
