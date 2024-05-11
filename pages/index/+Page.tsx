export { Page }

import './Page.css'

function Page() {
  return (
    <div class="home">
      <div class="splash">
        <h1 class="name">Mike Taylor</h1>
        <p class="title">Canadian Software Developer</p>
        <div class="social">
          <a href="mailto:contact@mtaylor.io">
            <i class="fa-solid fa-envelope fa-2x">
              Email
            </i>
          </a>
          <a href="https://github.com/mtaylor91">
            <i class="fa-brands fa-github fa-2x">
              GitHub
            </i>
          </a>
        </div>
      </div>
      <div class="posts">
        <h2>Posts</h2>
        <div class="post-series">
          <ul>
            <li>
              <a href="/posts/alignment/tapestry">
                The Tapestry of Life
              </a>
            </li>
            <li>
              <a href="/posts/alignment/goals">
                Goals and Values
              </a>
            </li>
            <li>
              <a href="/posts/alignment/value">
                Value and Decision-Making
              </a>
            </li>
            <li>
              <a href="/posts/alignment/ai">
                Aligning AI
              </a>
            </li>
            <li>
              <a href="/posts/alignment/humanity">
                Aligning Humanity
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
