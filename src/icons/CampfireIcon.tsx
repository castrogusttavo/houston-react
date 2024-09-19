import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CampfireIcon({ iconName = 'campfire-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
