import { Separator } from "@/components/ui/separator";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const data = [
  {
    role: "Development Lead",
    company: "Accenture",
    date: "Dec 2023 - Present",
  },
  {
    role: "Front End Developer and Senior Analyst",
    company: "Accenture",
    date: "Dec 2022 - Nov 2023",
  },
  {
    company: "Accenture",
    role: "Front End Developer and Analyst",
    date: "Sept 2021 - Nov 2022",
  },
  {
    company: "Invest Ottawa",
    role: "Web Developer",
    date: "Jan 2021 - June 2021",
  },
  {
    company: "Syntronic",
    role: "Full Stack Developer",
    date: "2020",
  },
];

export default async function Work() {
  return (
    <section>
      <h1 className="text-3xl font-extrabold sm:text-5xl">my work 💼</h1>
      <p className="mt-2">a quick glimpse.</p>
      <p className="mt-8 text-ring">
        I&apos;ve been fortunate enough to contribute to significant projects
        with major companies all over Canada. In Toronto, I helped develop a
        customer portal of an alert service for a major transport company in the
        city, aimed at enhancing customer experience with timely updates for
        buses and trains. In Quebec, I helped build the web expeience of a
        financial dashboard tailored for financial advisors of a billion-dollar
        private wealth management firm.
      </p>
      <Separator className="mt-6" />
      <div className="mt-6">
        {data.map(({ company, role, date }) => (
          <div key={date} className="mb-6">
            <p className="text-xl font-bold">{company}</p>
            <p className="text-sm text-ring">{role} </p>
          </div>
        ))}
      </div>
      <Link
        href={"/adityavashisht.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center justify-center mt-6"
      >
        <ArrowTopRightIcon className="w-4 h-4 mr-2" />
        <p className="">resume</p>
      </Link>
    </section>
  );
}
