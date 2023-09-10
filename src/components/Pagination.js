import React from "react";
import "./page.css"; 

export default function Pagination({ page1, page2, page3 }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <a className="page-link" href="#" onClick={page1}>
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={page2}>
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={page3}>
            3
          </a>
        </li>
      </ul>
    </nav>
  );
}
