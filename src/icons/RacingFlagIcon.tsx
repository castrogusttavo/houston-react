import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RacingFlagIcon({
  iconName = 'racing-flag',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
