import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0;

type PageProps = { params: { slug: string } };

export default async function TemplateDetail({ params }: PageProps) {
  const { slug } = params;

  const { data: tpl } = await supabase
    .from("templates")
    .select(
      "id, title, slug, description, preview_url, thumb_url, download_url, editor_id, orientation, author_name, author_url, created_at"
    )
    .eq("slug", slug)
    .maybeSingle();

  if (!tpl) return notFound();

  const { data: editor } = await supabase
    .from("editors")
    .select("id, name, slug")
    .eq("id", tpl.editor_id)
    .maybeSingle();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> <span className="mx-1">/</span>
        {editor ? <Link href={`/${editor.slug}`}>{editor.name}</Link> : <span>Editor</span>}
        <span className="mx-1">/</span>
        <span className="text-slate-700">{tpl.title}</span>
      </nav>

      <div className="mt-6 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-video bg-black">
            <video
              src={tpl.preview_url || undefined}
              poster={tpl.thumb_url || undefined}
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-semibold tracking-tight">{tpl.title}</h1>
            {tpl.description ? <p className="mt-2 text-slate-600">{tpl.description}</p> : null}

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              {editor && (
                <Link
                  href={`/${editor.slug}`}
                  className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200"
                >
                  {editor.name}
                </Link>
              )}
              {tpl.orientation && (
                <span className="rounded-full bg-slate-100 px-3 py-1 capitalize">
                  {tpl.orientation}
                </span>
              )}
              {tpl.author_name &&
                (tpl.author_url ? (
                  <a
                    href={tpl.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    by {tpl.author_name}
                  </a>
                ) : (
                  <span>by {tpl.author_name}</span>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {tpl.download_url ? (
                <a
                  href={tpl.download_url}
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-indigo-500 transition-colors"
                >
                  {editor?.name === "CapCut"
                    ? "Open in CapCut"
                    : editor?.name === "After Effects"
                    ? "Open in After Effects"
                    : "Open in App"}
                </a>
              ) : null}

              {editor && (
                <Link
                  href={`/${editor.slug}`}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 px-5 py-2.5 text-sm hover:bg-slate-50"
                >
                  More {editor.name} templates
                </Link>
              )}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold">Details</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                Orientation:{" "}
                <span className="font-medium capitalize">{tpl.orientation ?? "—"}</span>
              </li>
              <li>
                Created:{" "}
                <span className="font-medium">
                  {tpl.created_at ? new Date(tpl.created_at).toLocaleDateString() : "—"}
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
