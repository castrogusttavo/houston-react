import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiceFaces04Icon({
  iconName = 'dice-faces-04',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
