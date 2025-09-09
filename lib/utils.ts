import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function enableContactForm() {
  return process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM === "true"
}

export function enableBlogSection() {
  return process.env.NEXT_PUBLIC_ENABLE_BLOG_SECTION === "true";
}

export function enableProjectsSection() {
  return process.env.NEXT_PUBLIC_ENABLE_PROJECTS_SECTION === "true";
}

export function enableColorSchemeSwitching() {
  return process.env.NEXT_PUBLIC_ENABLE_COLOR_SCHEME_SWITCHING === "true";
}

export function getResumeLink() {
  return process.env.NEXT_PUBLIC_RESUME_LINK || "#";
}

export const colorSchemes = [
  {
    name: "Forest & Sunset",
    primary: "#166534", // Forest Green
    secondary: "#ea580c", // Sunset Orange
  },
  {
    name: "Corporate Elite",
    primary: "#1e40af", // Rich Navy
    secondary: "#f59e0b", // Golden Amber
  },
  {
    name: "Nature's Edge",
    primary: "#166534", // Forest Green
    secondary: "#ea580c", // Sunset Orange
  },
  {
    name: "Ocean Breeze",
    // primary: "#0f766e", // Deep Teal
    primary: "#0e7490", // Deep Ocean Blue
    secondary: "#f97316", // Coral Orange
  },
  {
    name: "Sunset Glow",
    primary: "#be123c", // Deep Red
    secondary: "#f59e0b", // Golden Yellow
  },
  {
    name: "Mountain Mist",
    primary: "#374151", // Slate Gray
    secondary: "#3b82f6", // Sky Blue
  },
  {
    name: "Autumn Harvest",
    primary: "#9a3412", // Rustic Brown
    secondary: "#fbbf24", // Harvest Gold
  },
  {
    name: "Spring Meadow",
    primary: "#15803d", // Meadow Green
    secondary: "#10b981", // Fresh Mint
  },
  {
    name: "Modern Slate",
    primary: "#10b981", // Slate Blue-Gray
    // secondary: "#475569", // Mint Green
    // secondary: "#3b82f6", // Bright Blue
    // secondary: "#f9ef41", // Bright Blue
    secondary: "#0f766e", // Vibrant Purple
  },
];