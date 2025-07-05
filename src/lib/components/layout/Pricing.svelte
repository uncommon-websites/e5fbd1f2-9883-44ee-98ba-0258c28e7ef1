<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	// Using simple text icons as placeholders
	const IconCheck = '✓';
	const IconX = '✗';
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Find your next role faster",
		subtitle = "Choose the plan that matches your job search needs",
		tierNames = ["Explorer", "Professional", "Career Accelerator"],
		features = [
			{
				name: "Job matches per month",
				tiers: {
					Explorer: "50",
					Professional: "200",
					"Career Accelerator": "Unlimited"
				}
			},
			{
				name: "Company insights",
				tiers: {
					Explorer: "Basic",
					Professional: "Detailed",
					"Career Accelerator": "Complete"
				}
			},
			{
				name: "Profile optimization",
				tiers: {
					Explorer: false,
					Professional: true,
					"Career Accelerator": true
				}
			},
			{
				name: "Application tracking",
				tiers: {
					Explorer: "10 applications",
					Professional: "100 applications",
					"Career Accelerator": "Unlimited"
				}
			},
			{
				name: "Salary insights",
				tiers: {
					Explorer: false,
					Professional: true,
					"Career Accelerator": true
				}
			},
			{
				name: "Interview preparation",
				tiers: {
					Explorer: false,
					Professional: "Basic guides",
					"Career Accelerator": "1-on-1 coaching"
				}
			},
			{
				name: "Direct recruiter contact",
				tiers: {
					Explorer: false,
					Professional: false,
					"Career Accelerator": true
				}
			},
			{
				name: "Portfolio review",
				tiers: {
					Explorer: false,
					Professional: false,
					"Career Accelerator": "Monthly reviews"
				}
			},
			{
				name: "Priority support",
				tiers: {
					Explorer: false,
					Professional: true,
					"Career Accelerator": true
				}
			}
		],
		tiers = [
			{
				name: "Explorer",
				monthlyPrice: 0,
				yearlyPrice: 0,
				description: "Perfect for casual job seekers just getting started",
				features: [
					"50 curated job matches monthly",
					"Basic company insights",
					"Application tracking for 10 jobs",
					"Community Discord access"
				],
				cta: {
					label: "Start exploring",
					href: "/signup?plan=explorer"
				}
			},
			{
				name: "Professional",
				monthlyPrice: 29,
				yearlyPrice: 24, // 17% savings
				description: "For active job seekers ready to accelerate their search",
				features: [
					"200 targeted job matches monthly",
					"Detailed company insights",
					"Profile optimization tools",
					"Track up to 100 applications",
					"Salary benchmarking data",
					"Interview preparation guides"
				],
				cta: {
					label: "Go professional",
					href: "/signup?plan=professional"
				},
				highlight: true
			},
			{
				name: "Career Accelerator",
				monthlyPrice: 79,
				yearlyPrice: 65, // 18% savings
				description: "For serious professionals seeking premium opportunities",
				features: [
					"Unlimited job matches",
					"Complete company intelligence",
					"1-on-1 interview coaching",
					"Direct recruiter introductions",
					"Monthly portfolio reviews",
					"Priority customer support",
					"Exclusive job opportunities"
				],
				cta: {
					label: "Accelerate career",
					href: "/signup?plan=accelerator"
				}
			}
		]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-gray-200 p-0.5 gap-0.5">
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {!annual ? 'bg-white text-gray-900 border border-gray-300' : 'text-gray-600 hover:text-gray-900'}"
					onclick={() => (annual = false)}
				>
					Monthly
				</button>
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {annual ? 'bg-white text-gray-900 border border-gray-300' : 'text-gray-600 hover:text-gray-900'}"
					onclick={() => (annual = true)}
				>
					Annual <span class="text-xs ml-1 text-gray-500">Save up to 18%</span>
				</button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class={[
					"flex flex-col rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 dark:bg-gray-800 dark:ring-gray-700",
					tier.highlight ? "ring-2 ring-primary dark:ring-primary-700 -mt-2" : ""
				]}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 dark:text-white">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 dark:text-white">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3 dark:text-gray-300">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<span class="text-primary-600 dark:text-primary-400 size-5 flex-shrink-0">✓</span>
								<span class="text-body text-emphasis-medium dark:text-gray-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-auto">
					<Button
						href={tier.cta.href}
						variant={tier.highlight ? "primary" : "secondary"}
						class="w-full"
					>
						{tier.cta.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Mobile feature comparison (alternative view for very small screens) -->
		<div>
			<!-- Universal pricing comparison for mobile -->
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<!-- Sticky header with tier names -->
					<thead class="border-border sticky top-0 z-10 border-b">
						<tr>
							<th class="min-w-[120px] py-3 text-left">
								<span class="sr-only">Feature</span>
							</th>
							{#each tierNames as tierName, i}
								<th class="text-caption min-w-[100px] py-3 text-left dark:text-white">
									{tierName}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-border divide-y">
						{#each features as feature}
							<tr>
								<td class="text-body py-3 pr-8 font-medium lg:pr-0 dark:text-white">
									{feature.name}
								</td>
								{#each tierNames as tierName, i}
									<td class="py-3">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<span class="text-primary-900 dark:text-primary-400 text-lg">{IconCheck}</span>
											{:else}
												<span class="size-5 text-gray-400">{IconX}</span>
											{/if}
										{:else}
											<span class="text-callout font-medium text-gray-700 dark:text-gray-300">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
