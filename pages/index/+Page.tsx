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
        <ul>
          <li>
            <a href="/posts/constructivism">
              From a Positivist Realism Towards a Constructivist Idealism
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
