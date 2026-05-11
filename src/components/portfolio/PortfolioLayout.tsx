import { ArrowUpRight, ChevronDown, Mail, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { profile, verifiedLinks } from "@/data/profile";
import { SignatureDivider } from "@/components/portfolio/SignatureDivider";
import { cn } from "@/lib/utils";

const navGroups = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Biography" },
      { href: "/awards", label: "Awards" }
    ]
  },
  {
    href: "/experience",
    label: "Work",
    children: [
      { href: "/experience", label: "Academic Experience" },
      { href: "/gallery", label: "Gallery" }
    ]
  },
  {
    href: "/impact",
    label: "Research",
    children: [
      { href: "/impact", label: "Impact" },
      { href: "/publications", label: "Publications" },
      { href: "/books", label: "Books" },
      { href: "/research-themes", label: "Themes" },
      { href: "/science-writing", label: "Science Writing" }
    ]
  },
  { href: "/conferences", label: "Engagement" },
  { href: "/contact", label: "Contact" }
];

const footerSections = [
  { href: "/about", label: "Biography" },
  { href: "/experience", label: "Experience" },
  { href: "/awards", label: "Awards" },
  { href: "/impact", label: "Impact" },
  { href: "/publications", label: "Research Publications" },
  { href: "/books", label: "Books" },
  { href: "/research-themes", label: "Research Themes" },
  { href: "/conferences", label: "Engagements" },
  { href: "/science-writing", label: "Science Writing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

const scholarlyLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=lWbRQ2UAAAAJ"
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Sharanika-Dhal-2"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-sharanika-dhal-9ab99a16b/"
  },
  {
    label: "Sri Sri University",
    href: "https://srisriuniversity.edu.in/sharanika-dhal/"
  },
  {
    label: "Faculty of Management Studies",
    href: "https://srisriuniversity.edu.in/faculty-of-management-studies/"
  }
];

function isGroupActive(pathname: string, item: (typeof navGroups)[number]) {
  if (item.href === "/" && pathname === "/") return true;
  if (item.href !== "/" && pathname.startsWith(item.href)) return true;
  return item.children?.some((child) => pathname === child.href) ?? false;
}

function linkClass(isActive: boolean) {
  return cn(
    "rounded-full px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-surface hover:text-blue-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep",
    isActive && "bg-blue-tint text-blue-deep"
  );
}

export function PortfolioLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-50 border-b border-hairline bg-white shadow-sm">
        <nav className="container-grid flex min-h-16 items-center justify-between gap-5" aria-label="Primary navigation">
          <NavLink
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-deep"
            onClick={() => setOpen(false)}
          >
            <span className="h-10 w-10 overflow-hidden rounded-full border border-blue-deep/20 bg-blue-tint shadow-sm">
              <img src="/images/profile/sharanika-dhal.jpg" alt="" className="h-full w-full object-cover object-[50%_22%]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-text">{profile.name}</span>
              <span className="block text-xs text-text-muted">Academic portfolio</span>
            </span>
          </NavLink>

          <div className="hidden items-center justify-end gap-1 lg:flex">
            {navGroups.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <NavLink to={item.href} className={linkClass(isGroupActive(location.pathname, item))}>
                    <span className="inline-flex items-center gap-1">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" aria-hidden="true" />
                    </span>
                  </NavLink>
                  <div className="invisible absolute right-0 top-full z-50 w-64 translate-y-2 rounded-xl border border-hairline bg-white p-2 opacity-0 shadow-[0_22px_55px_rgba(10,14,26,0.16)] transition group-hover:visible group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-lg px-4 py-3 text-sm font-semibold text-text-muted transition hover:bg-surface hover:text-blue-deep",
                            isActive && "bg-blue-tint text-blue-deep"
                          )
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.href} to={item.href} className={({ isActive }) => linkClass(isActive)} end={item.href === "/"}>
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-white text-text shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>

        {open ? (
          <div className="fixed inset-0 z-50 bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="container-grid flex min-h-16 items-center justify-between border-b border-hairline bg-white">
              <span className="flex min-w-0 items-center gap-3">
                <span className="h-10 w-10 overflow-hidden rounded-full border border-blue-deep/20 bg-blue-tint">
                  <img src="/images/profile/sharanika-dhal.jpg" alt="" className="h-full w-full object-cover object-[50%_22%]" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-text">{profile.name}</span>
                  <span className="block text-xs text-text-muted">Menu</span>
                </span>
              </span>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-white text-text shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="h-[calc(100dvh-4rem)] overflow-y-auto bg-white">
              <div className="container-grid grid gap-4 py-6">
                {navGroups.map((item) => (
                  <div key={item.label} className="rounded-xl border border-hairline bg-surface p-2">
                    <NavLink
                      to={item.href}
                      end={item.href === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-lg bg-white px-4 py-3 text-lg font-bold text-text shadow-sm",
                          (isActive || isGroupActive(location.pathname, item)) && "text-blue-deep"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.children ? (
                      <div className="mt-2 grid gap-1 px-2 pb-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              cn(
                                "rounded-lg px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-white hover:text-blue-deep",
                                isActive && "bg-white text-blue-deep"
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main key={location.pathname}>
        <Outlet />
      </main>

      <footer className="border-t border-hairline bg-[#F4F7FB]">
        <div className="container-grid py-14 md:py-18">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.75fr_0.95fr]">
            <div className="max-w-xl">
              <NavLink
                to="/"
                className="inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-deep"
              >
                <span className="h-14 w-14 overflow-hidden rounded-full border border-blue-deep/20 bg-blue-tint shadow-sm">
                  <img src="/images/profile/sharanika-dhal.jpg" alt="" className="h-full w-full object-cover object-[50%_22%]" />
                </span>
                <span>
                  <span className="block text-xl font-bold text-text">{profile.name}</span>
                  <span className="mt-1 block text-sm font-semibold text-blue-deep">{profile.designation}</span>
                </span>
              </NavLink>
              <p className="mt-6 max-w-lg font-serif text-xl italic leading-8 text-text-muted">
                Scholarship across human systems, healthcare performance, sustainability, and emerging technology.
              </p>
              <div className="mt-7 grid gap-3 text-base leading-7 text-text-muted">
                <p className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-deep" aria-hidden="true" />
                  <span>
                    {profile.faculty}, {profile.institution}
                    <br />
                    Godisahi, Cuttack, Odisha, India
                  </span>
                </p>
                <a
                  href="mailto:sharanika.d@srisriuniversity.edu.in"
                  className="flex gap-3 rounded-lg underline-offset-4 transition hover:text-blue-deep hover:underline"
                >
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-deep" aria-hidden="true" />
                  <span>sharanika.d@srisriuniversity.edu.in</span>
                </a>
              </div>
            </div>

            <nav aria-label="Footer sections">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-text-faint">Sections</p>
              <div className="mt-6 grid gap-3">
                {footerSections.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "w-fit text-lg font-medium leading-7 text-text-muted transition hover:text-blue-deep",
                        isActive && "text-blue-deep"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-text-faint">Scholarly Profiles</p>
              <div className="mt-6 grid gap-3">
                {scholarlyLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-lg font-medium leading-7 text-text-muted transition hover:text-blue-deep"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                ))}
                {verifiedLinks
                  .filter((link) => !scholarlyLinks.some((scholarlyLink) => scholarlyLink.href === link.href))
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group flex w-fit items-center gap-2 text-lg font-medium leading-7 text-text-muted transition hover:text-blue-deep"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
