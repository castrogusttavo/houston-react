import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EraserAddIcon({
  iconName = 'eraser-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
