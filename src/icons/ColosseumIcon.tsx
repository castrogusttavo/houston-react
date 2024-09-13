import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ColosseumIcon({ iconName = 'colosseum', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
