import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorDisabled02Icon({
  iconName = 'cursor-disabled-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
