import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MinusSignCircleIcon({
  iconName = 'minus-sign-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
