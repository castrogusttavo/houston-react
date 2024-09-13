import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DistributeVerticalTopIcon({
  iconName = 'distribute-vertical-top',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
