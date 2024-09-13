import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CodeSquareIcon({
  iconName = 'code-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
