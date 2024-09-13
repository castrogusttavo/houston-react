import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChampionIcon({ iconName = 'champion', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
