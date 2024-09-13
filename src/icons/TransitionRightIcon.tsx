import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TransitionRightIcon({
  iconName = 'transition-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
