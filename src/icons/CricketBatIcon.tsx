import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CricketBatIcon({
  iconName = 'cricket-bat',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
