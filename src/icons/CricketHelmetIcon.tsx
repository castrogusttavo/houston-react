import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CricketHelmetIcon({
  iconName = 'cricket-helmet',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
