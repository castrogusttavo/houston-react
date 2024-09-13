import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SignalNo01Icon({
  iconName = 'signal-no-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
