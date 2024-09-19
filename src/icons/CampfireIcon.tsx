import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CampfireIcon({ iconName = 'campfire', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
