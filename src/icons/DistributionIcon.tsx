import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DistributionIcon({
  iconName = 'distribution',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
