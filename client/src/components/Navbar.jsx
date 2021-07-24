import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav class={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-transparent`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Lets Gtok
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a className={`nav-link ${styles.link}`} aria-current="page" href="/">
                For Business
              </a>
            </li>
            <li class="nav-item">
              <a className={`nav-link ${styles.link}`} href="/">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a className={`nav-link ${styles.link}`} href="/">
                Carnival
              </a>
            </li>
            <li class="nav-item">
              <a className={`nav-link ${styles.link}`} href="/">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
