import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello subfolder.{" "}
      <Link href="/about">about.tsx subfolder under /app/about</Link>
      Hello samefolder.
      <Link href="/samefolder">samefolder.tsx under /app</Link>
    </div>
  );
}
