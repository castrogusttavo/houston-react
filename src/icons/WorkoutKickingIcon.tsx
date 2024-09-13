import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WorkoutKickingIcon({
  iconName = 'workout-kicking',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
