import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Megaphone02Icon({
  iconName = 'megaphone-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
