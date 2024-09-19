import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiceFaces05Icon({
  iconName = 'dice-faces-05',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
