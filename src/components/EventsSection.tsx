"use client";
import { Timeline } from "@/components/ui/timeline";
import TiltedCard from "@/components/ui/TiltedCard";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    title: "AI Workshop Series 2024",
    date: "March 15-17, 2024",
    location: "Main Auditorium",
    attendees: 150,
    status: "Upcoming",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    description: "3-day intensive workshop covering latest AI/ML techniques and frameworks"
  },
  {
    title: "Hackathon 2024",
    date: "April 5-7, 2024",
    location: "Innovation Lab",
    attendees: 200,
    status: "Registration Open",
    type: "Competition",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    description: "48-hour coding marathon to build innovative solutions for real-world problems"
  },
  {
    title: "Industry Expert Talk",
    date: "February 20, 2024",
    location: "Conference Hall",
    attendees: 180,
    status: "Completed",
    type: "Seminar",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    description: "Learn from industry leaders about cutting-edge tech and career opportunities"
  },
  {
    title: "Tech Talks Monthly",
    date: "Every Last Friday",
    location: "Virtual",
    attendees: 120,
    status: "Recurring",
    type: "Meetup",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
    description: "Monthly tech discussions featuring student projects and research presentations"
  }
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
                <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                  event.status === "Upcoming" ? "bg-accent/20 text-accent border border-accent/30" :
                  event.status === "Registration Open" ? "bg-secondary/20 text-secondary border border-secondary/30" :
                  event.status === "Completed" ? "bg-primary/20 text-primary border border-primary/30" :
                  "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                }`}>
                  {event.status}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20 font-medium">
                  {event.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{event.description}</p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>{event.attendees} Attendees</span>
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