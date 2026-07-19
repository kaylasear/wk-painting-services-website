import { withBase } from "../utils/url";

export const SITE = {
  name: "WK Painting Services, LLC",
  phone: "(253) 906-1802",
  phoneHref: "tel:12539061802",
  email: "waynekhim@gmail.com",
  estimateHref: withBase("/contact"),
  tagline: "Pierce County Exterior, Interior & Cabinet Painters",
  hours: "Mon–Sun, Always Open",
} as const;
