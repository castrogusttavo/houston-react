import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LayoutGridIcon({
  iconName = 'layout-grid',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
