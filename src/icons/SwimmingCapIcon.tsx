import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SwimmingCapIcon({
  iconName = 'swimming-cap',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
