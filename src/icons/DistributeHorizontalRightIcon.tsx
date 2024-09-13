import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DistributeHorizontalRightIcon({
  iconName = 'distribute-horizontal-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
