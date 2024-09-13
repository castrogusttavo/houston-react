import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EqualSignSquareIcon({
  iconName = 'equal-sign-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
