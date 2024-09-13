import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hospital02Icon({
  iconName = 'hospital-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
