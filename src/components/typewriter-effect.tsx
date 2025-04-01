"use client";  // Add this to mark it as client-side code

import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render the typewriter effect on the server
  }

  return (
    <div className="font-bold text-3xl">
      <Typewriter
        options={{
          strings: ["Pranav Shinde", "Data Engineer","Gamer🎮", "Traveler"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
