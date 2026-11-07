type Entry = { title: string; institution: string; year?: string; detail?: string };
export default function Timeline({ entries, emptyText }: { entries: Entry[]; emptyText: string }) {
  if (!entries.length) return <p className="empty-note">{emptyText}</p>;
  return <ol className="timeline">{entries.map((entry, i) => <li key={`${entry.title}-${i}`}>
    <span className="timeline-dot" /><div className="timeline-content"><span className="timeline-year">{entry.year || "DATE TO BE ADDED"}</span>
      <h3>{entry.title}</h3><p className="timeline-place">{entry.institution}</p>{entry.detail && <p>{entry.detail}</p>}</div>
  </li>)}</ol>;
}
