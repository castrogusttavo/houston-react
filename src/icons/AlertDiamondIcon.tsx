import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlertDiamondIcon({
  iconName = 'alert-diamond',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
