import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Payment02Icon({
  iconName = 'payment-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
