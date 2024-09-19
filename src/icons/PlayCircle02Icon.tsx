import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlayCircle02Icon({
  iconName = 'play-circle-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
