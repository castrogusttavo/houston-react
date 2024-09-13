import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MinusSignSquareIcon({
  iconName = 'minus-sign-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
