import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DistributeVerticalBottomIcon({
  iconName = 'distribute-vertical-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
