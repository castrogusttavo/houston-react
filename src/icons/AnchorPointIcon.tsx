import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AnchorPointIcon({
  iconName = 'anchor-point',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
