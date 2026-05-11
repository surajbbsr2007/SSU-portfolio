import { profile, verifiedLinks } from "@/data/profile";

export const contact = {
  name: profile.name,
  designation: `${profile.designation}, ${profile.faculty}`,
  institution: profile.institution,
  location: profile.location,
  email: "",
  phone: "",
  address: "Sri Sri University, Odisha, India",
  links: verifiedLinks,
  note:
    "The provided data does not include a verified email address or mobile number. Academic profile links are limited to verified source URLs."
};
