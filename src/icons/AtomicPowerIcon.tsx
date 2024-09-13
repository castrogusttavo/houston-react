import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AtomicPowerIcon({
  iconName = 'atomic-power',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
