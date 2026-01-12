"use client"; // Only for Next 13+ with App Router

import Script from "next/script";
import React, { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  onCalendlyEvent?: (e: any) => void;
}

export default function CalendlyPopup({ onCalendlyEvent }: CalendlyEmbedProps) {
  return (
    <>
      <div className="calendly-embed-wrapper h-screen flex flex-col justify-center">
        <div
          className="calendly-inline-widget w-screen h-screen max-w-7xl "
          data-url={"https://calendly.com/quebitslabs/discovery-call"}
        ></div>
      </div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
}
