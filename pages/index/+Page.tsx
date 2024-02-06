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
    </>
  )
}
