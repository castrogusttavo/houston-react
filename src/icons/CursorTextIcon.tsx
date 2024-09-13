import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorTextIcon({
  iconName = 'cursor-text',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
