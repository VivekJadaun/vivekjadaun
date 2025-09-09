"use client";

import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { colorSchemes, enableColorSchemeSwitching } from "@/lib/utils";

export function ColorSchemeToggle() {
  const showColorScheme = enableColorSchemeSwitching();
  const applyColorScheme = (primary: string, secondary: string) => {
    // Convert hex to HSL for CSS custom properties
    const hexToHsl = (hex: string) => {
      const r = Number.parseInt(hex.slice(1, 3), 16) / 255;
      const g = Number.parseInt(hex.slice(3, 5), 16) / 255;
      const b = Number.parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0,
        s = 0,
        l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(
        l * 100
      )}%`;
    };

    const primaryHsl = hexToHsl(primary);
    const secondaryHsl = hexToHsl(secondary);

    // Update CSS custom properties
    document.documentElement.style.setProperty("--primary", primaryHsl);
    document.documentElement.style.setProperty("--secondary", secondaryHsl);
    document.documentElement.style.setProperty("--ring", primaryHsl);
  };

  return showColorScheme ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change color scheme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {colorSchemes.map((scheme) => (
          <DropdownMenuItem
            key={scheme.name}
            onClick={() => applyColorScheme(scheme.primary, scheme.secondary)}
            className="flex items-center justify-between"
          >
            <span>{scheme.name}</span>
            <div className="flex space-x-1">
              <div
                className="w-3 h-3 rounded-full border border-border/20"
                style={{ backgroundColor: scheme.primary }}
              />
              <div
                className="w-3 h-3 rounded-full border border-border/20"
                style={{ backgroundColor: scheme.secondary }}
              />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : null;
}
