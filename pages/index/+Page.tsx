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
      <ul class="posts">
        <li>
          <a href="/posts/alignment/ai">
            Aligning AI, Aligning Life:
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
          <a href="/posts/alignment/you">
            Aligning AI with YOU:
            <br />
            Unlocking the Power of Personalized Intelligence
          </a>
        </li>
      </ul>
    </>
  )
}
