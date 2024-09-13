import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DistributeVerticalCenterIcon({
  iconName = 'distribute-vertical-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
