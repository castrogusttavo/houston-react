import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MouseLeftClick02Icon({
  iconName = 'mouse-left-click-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
