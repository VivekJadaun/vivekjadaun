import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Redux",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "Python",
      "Apollo GraphQL",
      "RESTful APIs",
    ],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS Amplify",
      "AWS AppSync",
      "AWS S3",
      "AWS ECS",
      "GitHub Actions",
      "CircleCI",
      "Nullstone CI/CD",
    ],
  },
  {
    category: "Tools & Libraries",
    skills: [
      "Git",
      "Docker",
      "RTL",
      "Cypress",
      "Material UI",
      "GTM",
      "GA4",
      "Webpack",
      "Babel",
      "ESLint",
    ],
  },
];

export default function SkillsContent() {
  return (
    <div className="py-20" id="skills">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My expertise and technical proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <Card className="h-full border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
