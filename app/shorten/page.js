"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    if (!url || !shorturl) {
      alert("Please enter both URL and short URL");
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shorturl,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || result.message || "Failed to create short URL"
        );
      }

      setGenerated(`${window.location.origin}/${shorturl}`);

      setUrl("");
      setShorturl("");

      console.log(result);
      alert(result.message);
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <div className="text-black text-3xl flex justify-center items-center font-bold font-serif pt-10">
        <h1>BitLinks - "Smaller links, bigger impact."</h1>
      </div>

      <div className="min-h-[50vh] font-serif mx-auto max-w-lg bg-gray-200 my-16 p-8 rounded-lg flex flex-col gap-4">
        <h1 className="font-bold font-serif text-2xl">
          Generate your short URLs
        </h1>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={url}
            className="bg-white p-4 focus:outline-gray-600 rounded-xl mt-4"
            placeholder="Enter your URL"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="text"
            value={shorturl}
            className="bg-white p-4 focus:outline-gray-600 rounded-xl mt-4"
            placeholder="Enter your preferred short URL text"
            onChange={(e) => setShorturl(e.target.value)}
          />

          <button
            onClick={generate}
            className="bg-black text-white rounded-xl mt-4 p-3 text-xl"
          >
            Generate short URL
          </button>
        </div>

        {generated && (
          <>
            <span className="font-bold text-xl">Your Link:</span>

            <code>
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </>
        )}

        <Image
          className="mix-blend-darken rounded-2xl"
          alt="An image"
          src="/vector3.png"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default Shorten;
