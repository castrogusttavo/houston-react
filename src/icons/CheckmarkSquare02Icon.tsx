import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkSquare02Icon({
  iconName = 'checkmark-square-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
