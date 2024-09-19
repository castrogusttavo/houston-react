import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Cashier02Icon({
  iconName = 'cashier-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
