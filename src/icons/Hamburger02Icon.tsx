import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hamburger02Icon({
  iconName = 'hamburger-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
