import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Triangle02Icon({
  iconName = 'triangle-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
