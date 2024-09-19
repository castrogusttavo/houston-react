import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiceFaces02Icon({
  iconName = 'dice-faces-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
