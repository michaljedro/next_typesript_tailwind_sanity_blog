import { previewData } from "next/headers";
import { groq } from "next-sanity";

export default function HomePage() {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }
  return (
    <div>
      <h1>Not in preview mode</h1>
    </div>
  );
}
