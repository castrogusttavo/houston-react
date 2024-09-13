import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowLeftRightIcon({
  iconName = 'circle-arrow-left-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
