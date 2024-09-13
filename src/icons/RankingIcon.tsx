import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RankingIcon({ iconName = 'ranking', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
