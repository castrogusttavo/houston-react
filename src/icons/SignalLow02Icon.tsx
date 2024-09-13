import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SignalLow02Icon({
  iconName = 'signal-low-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
