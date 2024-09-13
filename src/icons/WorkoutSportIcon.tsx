import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WorkoutSportIcon({
  iconName = 'workout-sport',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
