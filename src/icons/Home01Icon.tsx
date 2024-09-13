import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Home01Icon({ iconName = 'home-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
