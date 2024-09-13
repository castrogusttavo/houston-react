import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DistributeHorizontalLeftIcon({
  iconName = 'distribute-horizontal-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
