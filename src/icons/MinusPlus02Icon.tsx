import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MinusPlus02Icon({
  iconName = 'minus-plus-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
