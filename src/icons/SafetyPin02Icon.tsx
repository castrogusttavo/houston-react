import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SafetyPin02Icon({
  iconName = 'safety-pin-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
