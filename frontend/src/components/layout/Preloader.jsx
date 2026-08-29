import { useEffect, useState } from "react";

/* The theme's preloader — five bars that rise and fall while the page
   loads. Its markup and CSS already ship in style.css; the template hid
   it with jQuery on `window.load`, which is all this does.

   Two guards the original lacked: a hard timeout, so a slow or failed
   asset can never leave a visitor staring at a blank white screen; and a
   fade-out, so it does not vanish abruptly. */

const MAX_WAIT = 4000;

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const finish = () => setDone(true);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    const timeout = setTimeout(finish, MAX_WAIT);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(timeout);
    };
  }, []);

  // Unmount only after the fade, so the element is not left in the DOM
  // covering the page.
  useEffect(() => {
    if (!done) return undefined;
    const t = setTimeout(() => setHidden(true), 450);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div id="preloader" className={done ? "fx-preloader-done" : ""}>
      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
