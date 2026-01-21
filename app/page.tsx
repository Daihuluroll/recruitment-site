import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="font-bold text-blue-700 text-lg">
          Software Recruitment co.
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-blue-700 transition">For jobseekers</a>
          <a href="#" className="hover:text-blue-700 transition">For clients</a>
          <a href="#" className="hover:text-blue-700 transition">Sectors</a>
          <a href="#" className="hover:text-blue-700 transition">Resources</a>
        </nav>

        <div className="flex gap-2">
          <Button variant="secondary">Upload CV</Button>
          <Button>Contact us</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-700 text-white rounded-b-3xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-24 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-blue-200">
              Software Recruitment Specialists
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Elevate your career in tech
            </h1>

            <p className="mt-4 text-blue-100 max-w-md">
              Connecting talented engineers with forward-thinking companies
              across software, cloud, and infrastructure.
            </p>

            <div className="mt-8 flex bg-white rounded-full overflow-hidden max-w-md shadow-lg">
              <input
                className="flex-1 px-5 py-3 text-black outline-none"
                placeholder="Search by skill, role, or tech"
              />
              <button className="bg-yellow-400 px-6 font-semibold hover:bg-yellow-300 transition">
                Search jobs
              </button>
            </div>

            {/* Trust stats */}
            <div className="mt-10 flex gap-8 text-sm text-blue-100">
              <div>
                <p className="text-white font-bold text-lg">500+</p>
                <p>Placements made</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">120+</p>
                <p>Hiring partners</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">10 yrs</p>
                <p>Industry experience</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              className="rounded-3xl max-w-sm shadow-2xl"
              alt="Professional"
            />
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-slate-500 mb-10">
            Who we work with
          </p>

          <div className="flex flex-wrap items-center justify-center gap-14">
            <div className="logo-box">
              <img src="/logos/Microsoft.svg" alt="Microsoft" className="logo logo-microsoft" />
            </div>
            <div className="logo-box">
              <img src="/logos/Oracle.svg" alt="Oracle" className="logo logo-oracle" />
            </div>
            <div className="logo-box">
              <img src="/logos/Atlassian.svg" alt="Atlassian" className="logo logo-atlassian" />
            </div>
            <div className="logo-box">
              <img src="/logos/Cloudflare.svg" alt="Cloudflare" className="logo logo-cloudflare" />
            </div>
            <div className="logo-box">
              <img src="/logos/VMware.svg" alt="VMware" className="logo logo-vmware" />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Latest Jobs
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Hand-picked roles from companies actively hiring
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { color: "bg-yellow-300", title: "Software Engineer", tag: "Python" },
              { color: "bg-blue-700 text-white", title: "Frontend Developer", tag: "React" },
              { color: "bg-orange-300", title: "Cloud Engineer", tag: "AWS" },
            ].map((job, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg ${job.color}`}
              >
                <span className="inline-block text-xs font-semibold mb-2 px-3 py-1 rounded-full bg-white/70 text-black">
                  {job.tag}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {job.title}
                </h3>

                <p className="text-sm mt-2">
                  London · £65,000
                </p>

                <p className="text-sm mt-4 leading-relaxed">
                  Join a fast-growing team building scalable, production-ready
                  software used by thousands of users.
                </p>

                <button className="mt-6 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-slate-100 transition">
                  View this job
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h4 className="font-bold mb-4">Software Recruitment co.</h4>
            <p className="text-blue-200">
              Building careers in tech, one placement at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Homepage</li>
              <li>For jobseekers</li>
              <li>For clients</li>
              <li>Resources</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sectors</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Software Engineering</li>
              <li>DevOps</li>
              <li>Cloud</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Permanent</li>
              <li>Contract</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
