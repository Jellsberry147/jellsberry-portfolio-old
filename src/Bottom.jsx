import React from "react";

export function Bottom() {
  return (
    <div className="bottom">
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
        <div>
          <a
            class="footer-link"
            href="https://www.linkedin.com/in/joseph-ellsberry/"
          >
            Linkedin
          </a>
          <a class="footer-link" href="https://twitter.com/Jellsberry147">
            Twitter
          </a>
          <a
            class="footer-link"
            href=" https://www.youtube.com/channel/UCKBuhZMwUCFGZ7kGx-MvrPQ"
          >
            YouTube
          </a>
        </div>
      </footer>
    </div>
  );
}
