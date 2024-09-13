import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InformationDiamondIcon({
  iconName = 'information-diamond',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
