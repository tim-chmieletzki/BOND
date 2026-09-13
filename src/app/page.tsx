import Link from "next/link";

export default function Starter() {
  return (
    <main>
      <div className="flex flex-col gap-4">
        <h1>Starter</h1>
        <Link href="/login">Log In</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Zu Dashboard</Link>
      </div>
    </main>
  );
}
