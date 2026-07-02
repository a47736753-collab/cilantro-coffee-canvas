import { ORDER_LINKS } from "@/lib/menu-data";

type Props = { size?: "sm" | "md"; className?: string };

export function OrderButtons({ size = "md", className = "" }: Props) {
  const pad = size === "sm" ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm";
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a
        href={ORDER_LINKS.swiggy}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full bg-[#FC8019] font-medium text-white shadow-soft transition hover:brightness-110 ${pad}`}
      >
        Swiggy
      </a>
      <a
        href={ORDER_LINKS.zomato}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full bg-[#E23744] font-medium text-white shadow-soft transition hover:brightness-110 ${pad}`}
      >
        Zomato
      </a>
    </div>
  );
}
