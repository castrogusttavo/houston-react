import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HonourStarIcon({
  iconName = 'honour-star',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
