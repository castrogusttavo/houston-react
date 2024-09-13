import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorInfo01Icon({
  iconName = 'cursor-info-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
