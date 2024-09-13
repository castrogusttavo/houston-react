import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Airplane02Icon({
  iconName = 'airplane-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
