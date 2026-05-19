"use client";

import { useEffect } from "react";

export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const themed = `${url}?hide_event_type_details=0&hide_gdpr_banner=1&background_color=0a0a0a&text_color=f2f1ee&primary_color=f2f1ee`;

  return (
    <div
      className="calendly-inline-widget cal-embed"
      data-url={themed}
      style={{ minWidth: 320, height: 780 }}
    />
  );
}
