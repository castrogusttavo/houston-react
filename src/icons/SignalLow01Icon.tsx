import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SignalLow01Icon({
  iconName = 'signal-low-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
