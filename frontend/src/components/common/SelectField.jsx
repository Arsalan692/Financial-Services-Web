import { useEffect, useId, useRef, useState } from "react";

/* A dropdown that can actually animate.

   A native <select> draws its popup in the operating system, outside the
   page, so no amount of CSS will animate it. This replaces it with a
   button and a listbox we control.

   That trade has to be paid for in behaviour the native control gives
   away free, so it is implemented here: Escape and click-outside close
   it, Up/Down move through the options, Home/End jump to the ends, Enter
   or Space selects, and the button carries the ARIA a screen reader
   needs. Options are grouped exactly as <optgroup> would. */

export default function SelectField({
  groups,
  value,
  onChange,
  placeholder = "Select…",
  ariaLabel,
  variant = "light",
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef(null);
  const id = useId();

  // Flattened, so keyboard movement can cross group boundaries.
  const flat = groups.flatMap((g) => g.options);
  const selected = flat.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => {
          const next = e.key === "ArrowDown" ? i + 1 : i - 1;
          return Math.max(0, Math.min(flat.length - 1, next));
        });
      }
      if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        setActive(flat.length - 1);
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (active >= 0) {
          onChange(flat[active].value);
          setOpen(false);
        }
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, active, flat, onChange]);

  const toggle = () => {
    setOpen((wasOpen) => {
      if (!wasOpen) {
        setActive(flat.findIndex((o) => o.value === value));
      }
      return !wasOpen;
    });
  };

  return (
    <div
      className={`fx-select fx-select-${variant}${open ? " is-open" : ""}`}
      ref={wrapRef}
    >
      <button
        type="button"
        className="fx-select-button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span className={selected ? "" : "fx-select-placeholder"}>
          {selected ? selected.label : placeholder}
        </span>
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </button>

      {/* Kept mounted so it can animate; the grid row expands from 0fr. */}
      <div className="fx-select-panel" aria-hidden={!open}>
        <div className="fx-select-panel-inner">
          <ul role="listbox" aria-label={ariaLabel} id={id}>
            {groups.map((group) => (
              <li key={group.label} role="group" aria-label={group.label}>
                <span className="fx-select-group">{group.label}</span>
                <ul>
                  {group.options.map((option) => {
                    const i = flat.indexOf(option);
                    return (
                      <li
                        key={option.value}
                        role="option"
                        aria-selected={option.value === value}
                        className={`fx-select-option${
                          i === active ? " is-active" : ""
                        }${option.value === value ? " is-selected" : ""}`}
                        onClick={() => {
                          onChange(option.value);
                          setOpen(false);
                        }}
                        onMouseEnter={() => setActive(i)}
                      >
                        {option.label}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
