import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TransitionBottomIcon({
  iconName = 'transition-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
