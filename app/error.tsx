"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-lg text-center text-warning">
        Something went wrong!
      </p>
      <Link className="btn btn-info" href={"/"}>
        Let me take you home
      </Link>
    </div>
  );
}
