import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowReloadHorizontalIcon({
  iconName = 'arrow-reload-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
