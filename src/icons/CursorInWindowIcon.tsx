import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorInWindowIcon({
  iconName = 'cursor-in-window',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
