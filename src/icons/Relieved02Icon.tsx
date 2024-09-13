import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Relieved02Icon({
  iconName = 'relieved-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
