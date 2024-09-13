import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WorkoutSquatsIcon({
  iconName = 'workout-squats',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
