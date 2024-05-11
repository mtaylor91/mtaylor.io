import './Page.css'

export { Page }

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <div class="error-message">
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </div>
    )
  } else {
    return (
      <div class="error-message">
        <h1>500 Internal Error</h1>
        <p>Something went wrong.</p>
      </div>
    )
  }
}
