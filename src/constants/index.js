// Backwards-compatibility shim.
// All content now lives in src/content/<site>.js (selected by VITE_SITE).
// These re-exports keep older imports working; prefer importing from "../content".
import content from "../content";

export const servicesData = content.services.items;
export const projects = content.works.projects;
export const socials = content.socials;
