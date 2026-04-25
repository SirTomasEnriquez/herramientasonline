import Link from "next/link";
import { TOOLS } from "@/lib/tools";

export default function RelatedTools({ currentHref }: { currentHref: string }) {
  const related = TOOLS.filter((tool) => tool.href !== currentHref);

  return (
    <section className="max-w-2xl mx-auto mt-12 pt-8 border-t border-gray-100">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
        También puedes usar
      </h2>
      <div className="space-y-3">
        {related.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="flex items-center justify-between bg-white rounded-xl border border-gray-100 px-5 py-4 hover:border-green-200 hover:shadow-sm transition-all group"
          >
            <div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                {tool.title}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">{tool.description}</p>
            </div>
            <span className="text-gray-300 group-hover:text-green-400 transition-colors ml-4 shrink-0">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
