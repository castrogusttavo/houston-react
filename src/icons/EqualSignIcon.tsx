import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EqualSignIcon({
  iconName = 'equal-sign',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
