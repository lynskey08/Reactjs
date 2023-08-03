// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs is a greate Framework
          </Link>
        </li>
        <li>
          <Link href="">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
