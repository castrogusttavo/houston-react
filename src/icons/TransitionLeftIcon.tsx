import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TransitionLeftIcon({
  iconName = 'transition-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
