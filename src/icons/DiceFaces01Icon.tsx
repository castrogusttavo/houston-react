import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiceFaces01Icon({
  iconName = 'dice-faces-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
