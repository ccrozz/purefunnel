import Link from "next/link";

export default function NotFound() {
  return (
    <article className="wrap prose">
      <h1>This page is not here.</h1>
      <p>
        <Link href="/">Back to CoverTheShift</Link>
      </p>
    </article>
  );
}
