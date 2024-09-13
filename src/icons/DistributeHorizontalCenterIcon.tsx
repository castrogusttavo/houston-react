import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DistributeHorizontalCenterIcon({
  iconName = 'distribute-horizontal-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
