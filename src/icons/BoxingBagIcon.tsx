import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BoxingBagIcon({
  iconName = 'boxing-bag',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
