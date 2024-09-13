import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Backpack02Icon({
  iconName = 'backpack-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
