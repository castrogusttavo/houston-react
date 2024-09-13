import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EqualSignCircleIcon({
  iconName = 'equal-sign-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
