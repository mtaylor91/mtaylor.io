export { Page }

import './Page.css'

function Page() {
  return (
    <>
      <h1 class="name">Mike Taylor</h1>
      <p class="title">Canadian Software Developer</p>
      <div class="social">
        <a href="https://github.com/mtaylor91">
          <i class="fa-brands fa-github fa-2x">
            GitHub
          </i>
        </a>
      </div>
      <div class="posts">
        <h2>Posts</h2>
        <div class="post-series">
          <h3>Alignment Series</h3>
          <ul>
            <li>
              <a href="/posts/alignment/ai">
                Aligning AI with Life:
                <br />
                Navigating the Complexity of Intelligence, Goals, and Values
              </a>
            </li>
            <li>
              <a href="/posts/alignment/economic">
                Aligning Economics with Life:
                <br />
                Rethinking Value, Decision-Making, and Resource Allocation
              </a>
            </li>
            <li>
              <a href="/posts/alignment/ai2">
                Aligning AI with You:
                <br />
                Unlocking the Power of Personalized Intelligence
              </a>
            </li>
            <li>
              <a href="/posts/alignment/economic2">
                Aligning Economics with You:
                <br />
                Reimagining Value, Participation, and Flourishing in the Age of AI
              </a>
            </li>
          </ul>
        </div>
        <div class="post-series">
          <h3>Intelligence Series</h3>
          <ul>
            <li>
              <a href="/posts/intelligence/ai">
                Is AI Alive? Exploring the Nature of Life, Intelligence, and Emergence
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
