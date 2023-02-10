import React, { useContext } from "react";
import iconLocation from "../../../assets/icon-location.svg";
import iconWebsite from "../../../assets/icon-website.svg";
import iconTwitter from "../../../assets/icon-twitter.svg";
import iconCompany from "../../../assets/icon-company.svg";
import { DataContext } from "../Result";
import * as S from "./styles";

export const Link = () => {
  const data = useContext(DataContext);
  return (
    <S.Container>
      <li>
        <div>
          <img src={iconLocation} />
        </div>

        <span>{data ? data?.location : "San Francisco"}</span>
      </li>
      <li>
        <img src={iconWebsite} />
        <a href={data ? data?.html_url : "https://github.blog"}>
          <span>{data ? data?.html_url : "https://github.blog"}</span>
        </a>
      </li>
      <li>
        <img src={iconTwitter} />
        <a href="#">
          <span>{data ? data?.twitter_username : "Not Available"}</span>
        </a>
      </li>
      <li>
        <img src={iconCompany} />
        <span>{data ? data?.organizations_url : "@github"}</span>
      </li>
    </S.Container>
  );
};
