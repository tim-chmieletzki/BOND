import Link from "next/link";

export default function Starter() {
  return (
    <main>
      <div className="flex flex-col">
        <h1>Starter</h1>
        <Link href="/login">Log In</Link>
        <Link href="/register">Register</Link>
      </div>
    </main>
  );
}
