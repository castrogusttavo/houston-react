import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WikipediaIcon({ iconName = 'wikipedia', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
