import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WorkoutBattleRopesIcon({
  iconName = 'workout-battle-ropes',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
