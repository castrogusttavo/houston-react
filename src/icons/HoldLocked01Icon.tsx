import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HoldLocked01Icon({
  iconName = 'hold-locked-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
