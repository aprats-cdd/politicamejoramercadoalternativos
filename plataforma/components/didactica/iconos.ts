import {
  ClipboardList,
  Compass,
  Gavel,
  Scale,
  SearchCheck,
  Vault,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { IconoRol } from "@/data/schema";

/** Un ícono por rol, resuelto desde el nombre declarado en los datos. */
export const ICONOS_ROL: Record<IconoRol, LucideIcon> = {
  wallet: Wallet,
  compass: Compass,
  "clipboard-list": ClipboardList,
  vault: Vault,
  scale: Scale,
  "search-check": SearchCheck,
  gavel: Gavel,
};
