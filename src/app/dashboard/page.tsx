"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import LinkItem from "@/components/LinkItem";

import { mockUserLinks } from "@/data/mockUserLinks";
import { availableLinks } from "@/data/availableLinks";

export default function DashboardPage() {
  const [links, setLinks] = useState(mockUserLinks);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [editingPlatform, setEditingPlatform] = useState<string | null>(null);

  useEffect(() => {
    const savedLinks = localStorage.getItem("links");

    if (savedLinks) {
      const parsedLinks = JSON.parse(savedLinks);
      setLinks(parsedLinks);
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("links", JSON.stringify(links));
  }, [links, loaded]);

  function addLink() {
    if (!selectedPlatform || !url) {
      return;
    }

    if (links.length >= 5 && !editingPlatform) {
      return;
    }

    if (editingPlatform) {
      setLinks(
        links.map((link) =>
          link.platform === editingPlatform ? { ...link, url } : link,
        ),
      );

      setEditingPlatform(null);
    } else {
      if (links.some((link) => link.platform === selectedPlatform)) {
        return;
      }

      const newLink = {
        platform: selectedPlatform,
        url,
      };

      setLinks([...links, newLink]);
    }

    setSelectedPlatform("");
    setUrl("");
  }

  function removeLink(platform: string) {
    setLinks(links.filter((link) => link.platform !== platform));
  }

  function editLink(platform: string) {
    const linkToEdit = links.find((link) => link.platform === platform);

    if (!linkToEdit) return;

    setSelectedPlatform(linkToEdit.platform);
    setUrl(linkToEdit.url);
    setEditingPlatform(platform);
  }

  return (
    <main>
      <div className="flex flex-col items-start p-4">
        <h1>Dashboard</h1>
        {links.map((link) => (
          <LinkItem
            key={link.platform}
            platform={link.platform}
            url={link.url}
            onDelete={() => removeLink(link.platform)}
            onEdit={() => editLink(link.platform)}
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
                !links.some(
                  (userLink) => userLink.platform === availableLink.id,
                ),
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
        <button onClick={addLink}>
          {editingPlatform ? "Änderungen speichern" : "Speichern"}
        </button>
        {editingPlatform && (
          <button
            onClick={() => {
              setEditingPlatform(null);
              setSelectedPlatform("");
              setUrl("");
            }}
          >
            Abbrechen
          </button>
        )}
        {editingPlatform && (
          <button
            onClick={() => {
              setEditingPlatform(null);
              setSelectedPlatform("");
              setUrl("");
            }}
          >
            Abbrechen
          </button>
        )}
        <Link href="/">Zu Start</Link>
      </div>
    </main>
  );
}
