import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GeologyCrustIcon({
  iconName = 'geology-crust',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
