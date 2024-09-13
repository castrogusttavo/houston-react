import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MonsterIcon({ iconName = 'monster', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
