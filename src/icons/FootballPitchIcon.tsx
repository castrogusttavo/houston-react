import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FootballPitchIcon({
  iconName = 'football-pitch',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
