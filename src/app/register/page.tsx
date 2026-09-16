import Link from "next/link";

export default function Register() {
  return (
    <main>
      <div className="flex flex-col items-start gap-8 p-4">
        <h1>Account erstellen</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Passwort" />
        <input type="password" placeholder="Passwort wiederholen" />
        <button>Registrieren</button>
        <Link href="/">Zu Start</Link>
      </div>
    </main>
  );
}
