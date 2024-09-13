import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorMove01Icon({
  iconName = 'cursor-move-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
