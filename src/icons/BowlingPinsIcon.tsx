import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BowlingPinsIcon({
  iconName = 'bowling-pins',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
