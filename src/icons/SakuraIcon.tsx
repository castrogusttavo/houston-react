import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SakuraIcon({ iconName = 'sakura-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
