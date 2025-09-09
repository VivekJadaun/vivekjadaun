import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpCircle } from "lucide-react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // show if scrolled more than 100px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <div
      className={`fixed right-5 bottom-10 transition-opacity duration-500 ease-in-out ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      } md:block js-only`}
    >
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
      </Link>
    </div>
  );
}
