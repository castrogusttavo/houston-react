import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SakuraIconIcon({ iconName = 'sakura-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
