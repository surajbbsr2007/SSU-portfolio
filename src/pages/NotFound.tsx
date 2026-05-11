import { Link } from "react-router-dom";
import { SignatureDivider } from "@/components/portfolio/SignatureDivider";

export function NotFound() {
  return (
    <div className="container-grid flex min-h-[70vh] items-center justify-center py-16">
      <section className="max-w-lg rounded-xl border border-hairline bg-white p-8 text-center shadow-[0_16px_42px_rgba(10,14,26,0.05)]">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-text-faint">404</p>
        <h1 className="mt-3 text-3xl font-bold text-text">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-text-muted">The requested portfolio page is not available.</p>
        <SignatureDivider className="mx-auto mt-6 max-w-xs" />
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-blue-deep px-5 py-3 text-sm font-semibold text-white hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-deep"
        >
          Return home
        </Link>
      </section>
    </div>
  );
}
