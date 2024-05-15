export { Page }

import './Page.css'


function Page() {
  return (
    <div class="posts">
      <h2>Posts</h2>
      <div class="post-series">
        <h3>
          Meta-Crisis
        </h3>
        <ul>
          <li>
            <a href="/posts/metacrisis/science">
              Science and the Meta-Crisis
            </a>
          </li>
        </ul>
      </div>
      <div class="post-series">
        <h3>Alignment</h3>
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
  )
}
