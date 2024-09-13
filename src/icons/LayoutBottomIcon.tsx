import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LayoutBottomIcon({
  iconName = 'layout-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
