"use client";

import { useEffect, useState } from "react";

import LinkButton from "@/components/LinkButton";

import { availableLinks } from "@/data/availableLinks";

export default function ProfilePage() {
  const [links, setLinks] = useState<
    {
      platform: string;
      url: string;
    }[]
  >([]);

  useEffect(() => {
    const savedLinks = localStorage.getItem("links");

    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }
  }, []);

  return (
    <main className="flex flex-col gap-4">
      <h1>Tim</h1>

      {links.map((link) => {
        const platform = availableLinks.find(
          (item) => item.id === link.platform,
        );

        if (!platform) return null;

        return (
          <LinkButton
            key={link.platform}
            title={platform.name}
            url={link.url}
          />
        );
      })}
    </main>
  );
}
