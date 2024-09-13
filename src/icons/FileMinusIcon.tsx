import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileMinusIcon({
  iconName = 'file-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
