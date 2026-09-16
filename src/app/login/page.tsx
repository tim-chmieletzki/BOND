import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className="flex flex-col items-start gap-8 p-4">
        <h1>Anmelden</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Passwort" />
        <button>Anmelden</button>
        <Link href="/">Zu Start</Link>
      </div>
    </main>
  );
}
