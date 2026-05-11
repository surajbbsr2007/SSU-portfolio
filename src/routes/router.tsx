import { Navigate, createBrowserRouter } from "react-router-dom";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { NotFound } from "@/pages/NotFound";
import { About } from "@/pages/portfolio/About";
import { Awards } from "@/pages/portfolio/Awards";
import { Books } from "@/pages/portfolio/Books";
import { Conferences } from "@/pages/portfolio/Conferences";
import { Contact } from "@/pages/portfolio/Contact";
import { Experience } from "@/pages/portfolio/Experience";
import { Gallery } from "@/pages/portfolio/Gallery";
import { Home } from "@/pages/portfolio/Home";
import { Impact } from "@/pages/portfolio/Impact";
import { Publications } from "@/pages/portfolio/Publications";
import { ResearchThemes } from "@/pages/portfolio/ResearchThemes";
import { ScienceWriting } from "@/pages/portfolio/ScienceWriting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "impact", element: <Impact /> },
      { path: "publications", element: <Publications /> },
      { path: "books", element: <Books /> },
      { path: "research-themes", element: <ResearchThemes /> },
      { path: "awards", element: <Awards /> },
      { path: "conferences", element: <Conferences /> },
      { path: "science-writing", element: <ScienceWriting /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "dashboard", element: <Navigate to="/" replace /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);
