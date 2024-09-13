import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BadmintonShuttleIcon({
  iconName = 'badminton-shuttle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
