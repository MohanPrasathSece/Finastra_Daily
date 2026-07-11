import { useState, useRef, useEffect, type ChangeEvent } from "react";
import { ChevronDown, Search } from "lucide-react";
import { COUNTRIES, validateLocalPhone, type Country } from "@/lib/phoneCountries";

interface PhoneInputProps {
  onChange: (full: string, countryCode: string, error: string) => void;
  disabled?: boolean;
  defaultCountry?: string;
}

export function PhoneInput({
  onChange,
  disabled = false,
  defaultCountry = "FR",
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Country>(
    COUNTRIES.find((c) => c.code === defaultCountry) ?? COUNTRIES[0]
  );
  const [local, setLocal] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");
  const dropRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search)
  );

  const handleCountrySelect = (c: Country) => {
    setSelected(c);
    setOpen(false);
    setSearch("");
    const err = touched ? validateLocalPhone(local, c) : "";
    setError(err);
    onChange(local ? `${c.dial}${local}` : "", c.code, err);
  };

  const handleLocalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setLocal(val);
    const err = touched ? validateLocalPhone(val, selected) : "";
    setError(err);
    onChange(val ? `${selected.dial}${val}` : "", selected.code, err);
  };

  const handleLocalBlur = () => {
    setTouched(true);
    const err = validateLocalPhone(local, selected);
    setError(err);
    onChange(local ? `${selected.dial}${local}` : "", selected.code, err);
  };

  return (
    <div className="relative">
      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block text-left mb-1.5">
        Numéro de téléphone
      </label>
      <div className="flex gap-2">
        {/* Dropdown Country Selector */}
        <div ref={dropRef} className="relative shrink-0">
          <button
            type="button"
            disabled={disabled}
            onClick={() => setOpen((p) => !p)}
            className="flex h-10 items-center gap-1.5 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50 focus:border-black focus:outline-none disabled:opacity-50"
          >
            <span className="text-lg leading-none">{selected.flag}</span>
            <span className="font-mono text-xs font-semibold">{selected.dial}</span>
            <ChevronDown
              className={`h-3 w-3 opacity-60 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute left-0 top-full z-[150] mt-2 w-72 rounded-md border border-zinc-200 bg-white p-2 shadow-xl">
              {/* Search */}
              <div className="flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-1.5 mb-1.5 bg-white">
                <Search className="h-3.5 w-3.5 opacity-40 shrink-0" />
                <input
                  ref={searchRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un pays..."
                  className="w-full bg-transparent text-xs outline-none placeholder:opacity-40 text-zinc-950 font-medium"
                />
              </div>

              {/* Country List */}
              <ul className="max-h-52 overflow-y-auto bg-white">
                {filtered.length === 0 && (
                  <li className="px-3 py-4 text-center text-xs opacity-45 text-zinc-500">Aucun résultat</li>
                )}
                {filtered.map((c) => (
                  <li key={c.code}>
                    <button
                      type="button"
                      onClick={() => handleCountrySelect(c)}
                      className={`flex w-full items-center gap-3 rounded px-3 py-2 text-left text-xs transition-colors duration-150 hover:bg-zinc-50 text-zinc-950 font-medium ${
                        selected.code === c.code ? "bg-zinc-100 font-semibold" : ""
                      }`}
                    >
                      <span className="text-lg leading-none">{c.flag}</span>
                      <span className="flex-1 truncate">{c.name}</span>
                      <span className="font-mono opacity-50">{c.dial}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Number input */}
        <div className="relative flex-1">
          
<input
            type="tel"
            disabled={disabled}
            value={local}
            onChange={handleLocalChange}
            onBlur={handleLocalBlur}
            placeholder={selected.placeholder}
            className={`h-10 w-full rounded-md border px-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-black bg-white block font-medium ${
              touched && error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:border-black"
            }`}
           />
        </div>
      </div>
      {touched && error && (
        <div className="text-xs text-red-500 font-bold mt-1 text-left">
          {error}
        </div>
      )}
    </div>
  );
}
