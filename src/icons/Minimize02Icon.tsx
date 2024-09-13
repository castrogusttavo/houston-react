import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Minimize02Icon({
  iconName = 'minimize-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
