import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MinusSignIcon({
  iconName = 'minus-sign',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
