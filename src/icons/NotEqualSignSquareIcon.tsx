import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NotEqualSignSquareIcon({
  iconName = 'not-equal-sign-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
