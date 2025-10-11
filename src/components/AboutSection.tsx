"use client";
import { motion } from "motion/react";
import { Users, Target, Eye, Star } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const aboutCards = [
	{
		icon: Users,
		title: "Who We Are",
		highlightWord: "We",
		description:
			"ACM SIGAI is the Special Interest Group on Artificial Intelligence at our institution, affiliated with ACM. We unite students, researchers, and professionals passionate about AI and computing.",
	},
	{
		icon: Target,
		title: "Mission",
		highlightWord: "Mission",
		description:
			"To foster an active community of students passionate about artificial intelligence by promoting learning, innovation and ethical development through collaborative events, workshops and knowledge sharing.",
	},
	{
		icon: Eye,
		title: "Vision",
		highlightWord: "Vision",
		description:
			"To be a leading hub for AI enthusiasts in our region, empowering students to become skilled AI practitioners and responsible innovators who blend technological excellence with cultural awareness and ethical values to contribute meaningfully to society.",
	},
	{
		icon: Star,
		title: "Goals",
		highlightWord: "Goals",
		description: (
			<ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm leading-relaxed">
				<li>
					<strong>Skill Building:</strong> Workshops, lectures, hackathons, and
					participation in ICPC contests and AI summer/winter schools.
				</li>
				<li>
					<strong>Research:</strong> Support student AI projects and collaboration
					with academia and industry.
				</li>
				<li>
					<strong>Community:</strong> Foster an inclusive, vibrant community through
					meetups and outreach.
				</li>
				<li>
					<strong>Ethics:</strong> Promote responsible AI with privacy, fairness, and
					transparency.
				</li>
				<li>
					<strong>Career Growth:</strong> Offer mentorship, guidance, and networking
					opportunities.
				</li>
				<li>
					<strong>Collaboration:</strong> Partner with ACM chapters, organizations,
					and companies to expand opportunities.
				</li>
			</ul>
		),
	},
];

export default function AboutSection() {
	return (
		<section className="py-24 px-4 relative">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-4">
						About <span className="gradient-text">ACM SIGAI</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						A premier student chapter dedicated to advancing computing as a science
						and profession
					</p>
				</motion.div>

				{/* WHO WE ARE - full width */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8 flex justify-center"
				>
					<CardSpotlight className="w-full max-w-2xl mx-auto h-full">
						<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-20 mx-auto">
							<Users className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-2xl font-semibold mb-3 relative z-20 text-white text-center">
							<PointerHighlight
								pointerClassName="text-accent"
								rectangleClassName="border-accent/50"
								containerClassName="inline-block mx-1"
							>
								<span>Who We Are</span>
							</PointerHighlight>
						</h3>
						<p className="text-gray-400 text-base leading-relaxed text-center">
							ACM SIGAI is the Special Interest Group on Artificial Intelligence at
							our institution, affiliated with ACM. We unite students, researchers,
							and professionals passionate about AI and computing.
						</p>
					</CardSpotlight>
				</motion.div>

				{/* Mission & Vision - side by side */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					{aboutCards.slice(1, 3).map((card, index) => (
						<motion.div
							key={card.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<CardSpotlight className="h-full">
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-20 mx-auto">
									<card.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-3 relative z-20 text-white text-center">
									<PointerHighlight
										pointerClassName="text-accent"
										rectangleClassName="border-accent/50"
										containerClassName="inline-block mx-1"
									>
										<span>{card.title}</span>
									</PointerHighlight>
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed text-center">
									{card.description}
								</p>
							</CardSpotlight>
						</motion.div>
					))}
				</div>

				{/* Goals - full width, styled same as other cards */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex justify-center"
				>
					<CardSpotlight className="w-full max-w-3xl mx-auto h-full">
						<div className="flex items-center justify-center mb-4">
							<Star className="w-10 h-10 text-accent animate-bounce" />
						</div>
						<h3 className="text-2xl font-bold mb-4 text-accent text-center">
							<PointerHighlight
								pointerClassName="text-accent"
								rectangleClassName="border-accent/50"
								containerClassName="inline-block mx-1"
							>
								<span>Goals</span>
							</PointerHighlight>
						</h3>
						<div className="relative z-20">
							<ul className="list-disc pl-5 space-y-3 text-gray-400 text-base leading-relaxed">
								<li>
									<strong className="text-accent">Skill Building:</strong> Workshops,
									lectures, hackathons, and participation in ICPC contests and AI
									summer/winter schools.
								</li>
								<li>
									<strong className="text-accent">Research:</strong> Support student
									AI projects and collaboration with academia and industry.
								</li>
								<li>
									<strong className="text-accent">Community:</strong> Foster an
									inclusive, vibrant community through meetups and outreach.
								</li>
								<li>
									<strong className="text-accent">Ethics:</strong> Promote
									responsible AI with privacy, fairness, and transparency.
								</li>
								<li>
									<strong className="text-accent">Career Growth:</strong> Offer
									mentorship, guidance, and networking opportunities.
								</li>
								<li>
									<strong className="text-accent">Collaboration:</strong> Partner
									with ACM chapters, organizations, and companies to expand
									opportunities.
								</li>
							</ul>
						</div>
					</CardSpotlight>
				</motion.div>
			</div>
		</section>
	);
}