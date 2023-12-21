import { ComponentChild } from 'preact'
import { usePageContext } from './usePageContext'

export { Link }

function Link(props: { href?: string; className?: string; children: ComponentChild }) {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')
  return <a {...props} className={className} />
}
