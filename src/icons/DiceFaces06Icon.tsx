import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiceFaces06Icon({
  iconName = 'dice-faces-06',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
