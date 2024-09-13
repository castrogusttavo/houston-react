import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorHold02Icon({
  iconName = 'cursor-hold-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
