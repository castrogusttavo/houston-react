import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LayoutRightIcon({
  iconName = 'layout-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
