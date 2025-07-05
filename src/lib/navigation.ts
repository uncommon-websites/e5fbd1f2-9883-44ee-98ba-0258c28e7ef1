/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	/** Optional link target, e.g., '_blank' */
	target?: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Join community",
	href: "https://grids.at/community"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Smart job matching",
				href: "/use-cases/smart-job-matching",
				image: "/generated/image-a-person-sitting-at-a-desk-in-a-well-lit.webp",
				description: "Cut through thousands of irrelevant listings to find opportunities perfectly matched to your skills, experience, and career goals",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Company insights",
				href: "/use-cases/company-insights",
				image: "/generated/image-a-professional-in-a-modern-office-space-.webp",
				description: "Get clear insights into company culture, team dynamics, and role expectations before you apply - no more surprise toxic environments",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Profile optimization",
				href: "/use-cases/profile-optimization", 
				image: "/generated/image-a-creative-designer-in-a-bright-studio-s.webp",
				description: "Create profiles that stand out and check every box employers are looking for, increasing your chances of getting hired",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
