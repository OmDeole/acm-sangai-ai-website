"use client";
import { Timeline } from "@/components/ui/timeline";
import TiltedCard from "@/components/ui/TiltedCard";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
	{
		title: "AI & ML Innovation Challenge",
		date: "2nd-3rd Week of January",
		status: "Upcoming",
		type: "Hackathon",
		image: "Images/growtika-nGoCBxiaRO0-unsplash.jpg",
		description:
			"A hackathon where students develop AI/ML solutions for real-world problems.",
	},
	{
		title: "AI in Cybersecurity Workshop",
		date: "4th Week of January",
		status: "Upcoming",
		type: "Workshop",
		image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
		description:
			"Workshop demonstrating how AI can be applied to enhance cybersecurity.",
	},
	{
		title: "Web Development Quiz",
		date: "1st Week of February",
		status: "Upcoming",
		type: "Quiz",
		image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
		description:
			"Quiz-style competition to test and showcase web development skills.",
	},
	{
		title: "AI & ML Workshop Series",
		date: "2nd-3rd Week of February",
		status: "Upcoming",
		type: "Workshop",
		image: "Images/igor-omilaev-FHgWFzDDAOs-unsplash.jpg",
		description:
			"Hands-on workshop series to build practical AI, ML & DL knowledge and skills.",
	},
	{
		title: "Annual Tech Fest",
		date: "1st Week of March",
		status: "Upcoming",
		type: "Festival",
		image: "/Images/robynne-o-HOrhCnQsxnQ-unsplash.jpg",
		description:
			"Technical competitions combined with community interaction to showcase skills and teamwork.",
	},
];

export default function EventsSection() {
	const timelineData = events.map((event) => ({
		title: event.date,
		content: (
			<div className="mb-8">
				<TiltedCard
					imageSrc={event.image}
					altText={event.title}
					captionText={event.title}
					containerHeight="350px"
					containerWidth="100%"
					imageHeight="300px"
					imageWidth="100%"
					rotateAmplitude={10}
					scaleOnHover={1.08}
					showMobileWarning={false}
					showTooltip={true}
					displayOverlayContent={true}
					overlayContent={
						<div className="w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
							<div className="flex items-center gap-2 mb-3">
								<span
									className={`px-3 py-1 text-xs rounded-full font-medium ${
										event.status === "Upcoming"
											? "bg-accent/20 text-accent border border-accent/30"
											: event.status === "Registration Open"
											? "bg-secondary/20 text-secondary border border-secondary/30"
											: event.status === "Completed"
											? "bg-primary/20 text-primary border border-primary/30"
											: "bg-gray-500/20 text-gray-300 border border-gray-500/30"
									}`}
								>
									{event.status}
								</span>
								<span className="px-4 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20 font-high">
									{event.type}
								</span>
							</div>
							<h3 className="text-5xl font-bold text-white mb-2">
								{event.title}
							</h3>
							<p className="text-sm text-gray-300 mb-4">
								{event.description}
							</p>
							<div className="space-y-2 text-sm text-gray-300">
								<div className="flex items-center gap-2">
									<Calendar className="w-20 h-20 text-accent" />
									<span>{event.date}</span>
								</div>
							</div>
						</div>
					}
				/>
			</div>
		),
	}));

	return (
		<section className="py-24 px-4 relative overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				<Timeline data={timelineData} />
			</div>
		</section>
	);
}