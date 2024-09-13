import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StarCircleIcon({
  iconName = 'star-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
