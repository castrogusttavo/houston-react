import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TasbihIcon({ iconName = 'tasbih', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
