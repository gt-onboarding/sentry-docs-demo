import dynamic from 'next/dynamic';

const DocsChangelogClient = dynamic(
  () =>
    import('./docsChangelogClient').then(mod => ({
      default: mod.DocsChangelogClient,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:[color:rgb(210,199,218)]">
        Loading changelog…
      </div>
    ),
  }
);

export function DocsChangelog() {
  return <DocsChangelogClient />;
}
