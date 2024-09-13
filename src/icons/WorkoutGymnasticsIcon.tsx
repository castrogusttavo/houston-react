import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WorkoutGymnasticsIcon({
  iconName = 'workout-gymnastics',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
