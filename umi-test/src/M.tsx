import { FC, useRef, Fragment, RefObject } from 'react'
import { SelectProps } from 'rc-select'

interface IProps<T extends HTMLElement> {
  children: (
    renderProps: Pick<SelectProps, 'getPopupContainer'>,
    containerRef: RefObject<T>
  ) => React.ReactElement
}

const MountInPopup: FC<IProps<HTMLElement>> = (props) => {
  const { children } = props
  const containerRef = useRef<HTMLDivElement>(null)

  const renderProps = {
    getPopupContainer: () => containerRef.current as HTMLElement,
  }

  return (
    <Fragment>
      <div ref={containerRef} />
      {children(renderProps, containerRef)}
    </Fragment>
  )
}

export default MountInPopup
