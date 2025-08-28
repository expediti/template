export default function CollectionPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Collection: {params.slug}</h1>
      <p className="text-slate-600 mt-2">Coming soon.</p>
    </div>
  );
}
