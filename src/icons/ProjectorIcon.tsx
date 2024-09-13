import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ProjectorIcon({ iconName = 'projector', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
