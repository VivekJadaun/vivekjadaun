import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Techgrit Solutions Pvt. Ltd",
    period: "Oct 2022 - Present",
    location: "Delhi, India (Remote)",
    achievements: [
      "Leading front-end while actively contributing to the backend development for 360 Sync, a cloudbased service by EvolveMEP, streamlining cross-cloud file transfers and data synchronization.",
      "Led the migration of a monolithic architecture to a scalable micro-frontend architecture for 360 Sync, enabling modular development, improving system maintainability and streamlining deployments.",
      "Actively mentoring junior developers, leading code reviews and knowledge-sharing sessions to reinforce best practices in React.js, TypeScript, and scalable front-end architectures. Improved onboarding efficiency and enhanced cross-team collaboration in Agile environments.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Vinsol",
    period: "July 2018 - Sept 2022",
    location: "Delhi, India",
    achievements: [
      "Developed and optimized a scalable front-end website for SnackMagic, a corporate gifting platform, improving performance, accessibility and user experience across web and mobile platforms. Integrated CMS and marketing automation, boosting platform capabilities and user retention",
      "Developed a QR based transit regulation system PlateauPermit for the Govt. of Plateau State, Nigeria, enabling real-time monitoring and transit control during the COVID-19 lockdown.",
      "Led the development of uLesson, a Nigerian Ed-Tech platform, implementing front-end performance optimization, API integrations, and modular component architecture. Provided knowledge transfer and training to the client’s in-house team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
