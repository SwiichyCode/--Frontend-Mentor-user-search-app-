import iconLocation from "../../../assets/icon-location.svg";
import iconWebsite from "../../../assets/icon-website.svg";
import iconTwitter from "../../../assets/icon-twitter.svg";
import iconCompany from "../../../assets/icon-company.svg";

export const generateItem = (data) => [
  {
    icon: iconLocation,
    text: data ? data?.location : "San Francisco",
    available: data?.location ? true : false,
  },
  {
    icon: iconWebsite,
    text: data ? (
      <a href={data?.html_url}>{data?.html_url}</a>
    ) : (
      "https://github.blog"
    ),
    available: data?.html_url ? true : false,
  },
  {
    icon: iconTwitter,
    text: data ? data?.twitter_username : "Not Available",
    available: data?.twitter_username ? true : false,
  },
  {
    icon: iconCompany,
    text: data ? (
      <a href={data?.organizations_url}>{data?.organizations_url}</a>
    ) : (
      "@github"
    ),
    available: data?.organizations_url ? true : false,
  },
];
