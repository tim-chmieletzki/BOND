"use client";

import Link from "next/link";
import { useState } from "react";

import LinkItem from "@/components/LinkItem";
import { mockUserLinks } from "../data/mockUserLinks";
import { availableLinks } from "../data/availableLinks";

export default function DashboardPage() {
  const [links, setLinks] = useState(mockUserLinks);

  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [url, setUrl] = useState("");

  function addLink() {
    if (!selectedPlatform || !url) {
      return;
    }

    if (links.some((link) => link.platform === selectedPlatform)) {
      return;
    }

    const newLink = {
      platform: selectedPlatform,
      url,
    };

    setLinks([...links, newLink]);
    setSelectedPlatform("");
    setUrl("");
  }

  function removeLink(platform: string) {
    setLinks(links.filter((link) => link.platform !== platform));
  }

  return (
    <main className="flex flex-col items-start gap-4">
      <h1>Dashboard</h1>

      <h2>Meine Links</h2>

      {links.map((link) => (
        <LinkItem
          key={link.platform}
          platform={link.platform}
          url={link.url}
          onDelete={() => removeLink(link.platform)}
        />
      ))}

      <select
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
      >
        <option value="">Plattform auswählen</option>

        {availableLinks
          .filter(
            (availableLink) =>
              !links.some((userLink) => userLink.platform === availableLink.id),
          )
          .map((link) => (
            <option key={link.id} value={link.id}>
              {link.name}
            </option>
          ))}
      </select>

      <input
        type="text"
        placeholder="Profil URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={addLink}>Speichern</button>

      <Link href="/">Zu Start</Link>
    </main>
  );
}
